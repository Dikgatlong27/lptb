import React, { useState, useEffect } from 'react';
import { db } from '../../Firestore';
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

const formatQuoteDate = (quote) => {
  const value = quote.createdAt?.toDate?.() || quote.createdAtISO || quote.date;
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime())
    ? date.toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '—';
};

const Invoices = () => {
  const { currentUser } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  //modal state (deleting quotes)

  const [showModal, setShowModal] = useState(false);
  const [quoteToBeDeleted, setQuoteToBeDeleted] = useState(null);

  // Delete confirmation

  const confirmDelete = async () => {
    if (quoteToBeDeleted) {
      try {
        await deleteDoc(doc(db, 'quotes', quoteToBeDeleted));
        setQuotes((previous) =>
          previous.filter((quote) => quote.id !== quoteToBeDeleted),
        );
        alert('Quote deleted successfully');
      } catch (error) {
        console.log('Error deleting quote', error);
        alert('Failed to delete quote, Try Again');
      }
      setShowModal(false);
      setQuoteToBeDeleted(null);
    }
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'quotes'), where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const quotesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuotes(quotesData);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
      setLoading(false);
    };

    fetchQuotes();
  }, [currentUser]);

  const navigate = useNavigate();

  return (
    <div className="invoices-container">
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this quote?</p>
            <button onClick={confirmDelete} className="confirm-delete-btn">
              Yes, Delete
            </button>
            <button onClick={() => setShowModal(false)} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      )}

      <h2>Your Quotes</h2>
      <p className="quotes-intro">
        Your project requests, with the details in one place.
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : quotes.length === 0 ? (
        <p>No quotes submitted yet.</p>
      ) : (
        <ul className="quotes-list">
          {quotes.map((quote) => (
            <li key={quote.id} className="quote-item">
              <div className="quote-card-heading">
                <div>
                  <span className="quote-eyebrow">Website & development quote</span>
                  <h3>{quote.businessName || 'Your project'}</h3>
                </div>
                <span className="quote-package-badge">
                  {quote.packageName || quote.packageType || 'Custom'}
                </span>
              </div>
              <dl className="quote-details">
                <div>
                  <dt>Contact</dt>
                  <dd>{quote.contact || 'Not provided'}</dd>
                </div>
                <div>
                  <dt>Project brief</dt>
                  <dd>{quote.description || 'No description provided'}</dd>
                </div>
                <div>
                  <dt>Additional features</dt>
                  <dd>
                    {quote.features?.length
                      ? quote.features
                          .map((feature) =>
                            typeof feature === 'string'
                              ? feature
                              : feature.name || feature.label || feature.id,
                          )
                          .join(', ')
                      : 'No extras selected'}
                  </dd>
                </div>
              </dl>
              <div className="quote-card-footer">
                <span className="quote-date">Submitted {formatQuoteDate(quote)}</span>
                {/* Delete btn with modal */}
                <button
                  className="quote-delete-button"
                  aria-label={`Delete quote for ${quote.businessName || 'your project'}`}
                  onClick={() => {
                    setShowModal(true);
                    setQuoteToBeDeleted(quote.id);
                  }}
                >
                  Delete quote
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="back-to-dashboard-btn" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default Invoices;
