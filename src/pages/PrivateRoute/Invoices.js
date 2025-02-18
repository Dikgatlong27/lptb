import React, { useState, useEffect } from "react";
import { db } from "../../Firebase"; // Make sure Firebase is correctly imported
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

const Invoices = () => {
  const { currentUser } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //modal state (deleting quotes)

  const [showModal, setShowModal] = useState(false);
  const [quoteToBeDeleted, setQuoteToBeDeleted] = useState(null)
  
  // Delete confirmation

  const confirmDelete = async () => {
    if (quoteToBeDeleted) {
      try {
        await deleteDoc(doc(db, "quotes", quoteToBeDeleted));
        alert("Quote deleted successfully");
      } catch (error) {
        console.log("Error deleting quote", error);
        alert("Failed to delete quote, Try Again")
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
        const q = query(collection(db, "quotes"), where("userId", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const quotesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes:", error);
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
            <button onClick={confirmDelete} className="confirm-delete-btn">Yes, Delete</button>
            <button onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}



      <h2>Your Quotes</h2>
      {loading ? <p>Loading...</p> : quotes.length === 0 ? <p>No quotes submitted yet.</p> : (
        <ul className="quotes-list">
          {quotes.map((quote) => (
            <li key={quote.id} className="quote-item">
              <h3>Package: {quote.packageType}</h3>
              <p><strong>Business Name:</strong> {quote.businessName}</p>
              <p><strong>Contact:</strong> {quote.contact}</p>
              <p><strong>Description:</strong> {quote.description}</p>
              <p><strong>Additional Features:</strong> {quote.features.join(", ")}</p>
              <p><strong>Submitted:</strong> {new Date(quote.date).toLocaleString()}</p>
              {/* Delete btn with modal */}
              <button 
                onClick={() => {
                  setShowModal(true);
                  setQuoteToBeDeleted(quote.id)
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="back-to-dashboard-btn" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default Invoices;
