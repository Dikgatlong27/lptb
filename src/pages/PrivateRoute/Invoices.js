import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./Dashboard.css";

const Invoices = () => {
  const { currentUser } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchQuotes = async () => {
      try {
        const q = query(collection(db, "quotes"), where("userId", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const quotesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [currentUser]);

  return (
    <div className="dashboard-container">
      <h2>Your Submitted Quotes</h2>
      {loading ? <p>Loading...</p> : quotes.length === 0 ? <p>No quotes submitted yet.</p> : (
        <ul className="quote-list">
          {quotes.map((quote) => (
            <li key={quote.id} className="quote-item">
              <h3>Package: {quote.packageType}</h3>
              <p><strong>Business Name:</strong> {quote.businessName}</p>
              <p><strong>Contact:</strong> {quote.contact}</p>
              <p><strong>Description:</strong> {quote.description}</p>
              <p><strong>Features:</strong> {quote.features.join(", ")}</p>
              <p><strong>Date:</strong> {new Date(quote.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Invoices
