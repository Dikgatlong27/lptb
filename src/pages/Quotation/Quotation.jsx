import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiCheck,
  FiChevronRight,
  FiInfo,
  FiSave,
} from "react-icons/fi";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { useAuth } from "../../AuthContext";
import { db } from "../../Firebase";

import "./Quotation.css";

const packageOptions = {
  bronze: {
    id: "bronze",
    name: "Startup Website",
    displayPrice: "From R2,500",
    basePrice: 2500,
    description:
      "An affordable professional website for a startup or new business.",
  },

  silver: {
    id: "silver",
    name: "Business Website",
    displayPrice: "From R8,500",
    basePrice: 8500,
    description:
      "A stronger digital presence for a growing small or medium-sized business.",
  },

  gold: {
    id: "gold",
    name: "E-Commerce Solution",
    displayPrice: "From R15,500",
    basePrice: 15500,
    description:
      "An online selling, booking, or service platform with management functionality.",
  },

  platinum: {
    id: "platinum",
    name: "Custom Business Platform",
    displayPrice: "From R50,000",
    basePrice: 50000,
    description:
      "A custom operational web platform with dashboards, integrations, and business workflows.",
  },

  premium: {
    id: "premium",
    name: "Enterprise Platform",
    displayPrice: "From R100,000",
    basePrice: 100000,
    description:
      "A scalable enterprise solution consisting of connected systems, applications, and integrations.",
  },
};

const featureGroups = [
  {
    title: "Website Essentials",
    description:
      "Core features for business websites and customer communication.",
    features: [
      {
        id: "domain-hosting",
        name: "Custom Domain and Hosting",
        price: 1200,
      },
      {
        id: "responsive-design",
        name: "Responsive Mobile Design",
        price: 1500,
      },
      {
        id: "contact-form",
        name: "Contact Form and Lead Capture",
        price: 850,
      },
      {
        id: "whatsapp-integration",
        name: "WhatsApp Integration",
        price: 500,
      },
      {
        id: "blog",
        name: "Blog or News Section",
        price: 1800,
      },
      {
        id: "newsletter",
        name: "Newsletter Subscription",
        price: 1200,
      },
      {
        id: "multi-language",
        name: "Multi-Language Support",
        price: 3500,
      },
    ],
  },

  {
    title: "Branding and Design",
    description:
      "Visual identity and customised user-experience services.",
    features: [
      {
        id: "logo-design",
        name: "Professional Logo Design",
        price: 1500,
      },
      {
        id: "branding-kit",
        name: "Complete Branding Kit",
        price: 3500,
      },
      {
        id: "custom-ui",
        name: "Custom UI and UX Design",
        price: 4500,
      },
      {
        id: "content-writing",
        name: "Website Content Writing",
        price: 2500,
      },
      {
        id: "custom-graphics",
        name: "Custom Graphics and Visual Assets",
        price: 2200,
      },
    ],
  },

  {
    title: "E-Commerce and Payments",
    description:
      "Tools for selling products, services, subscriptions, or bookings.",
    features: [
      {
        id: "online-store",
        name: "Online Store",
        price: 6500,
      },
      {
        id: "payment-gateway",
        name: "Payment Gateway Integration",
        price: 3500,
      },
      {
        id: "shopping-cart",
        name: "Shopping Cart and Checkout",
        price: 2800,
      },
      {
        id: "product-management",
        name: "Product Management",
        price: 2500,
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 4500,
      },
      {
        id: "discounts",
        name: "Discount and Coupon System",
        price: 1800,
      },
      {
        id: "subscriptions",
        name: "Subscription Payments",
        price: 5500,
      },
      {
        id: "multi-vendor",
        name: "Multi-Vendor Marketplace",
        price: 25000,
      },
    ],
  },

  {
    title: "Accounts and Business Management",
    description:
      "Secure user accounts and tools for managing business activity.",
    features: [
      {
        id: "authentication",
        name: "User Login and Registration",
        price: 4500,
      },
      {
        id: "user-profile",
        name: "Customer Profile System",
        price: 2800,
      },
      {
        id: "admin-dashboard",
        name: "Administration Dashboard",
        price: 7500,
      },
      {
        id: "role-access",
        name: "Role-Based Access Control",
        price: 6500,
      },
      {
        id: "crm",
        name: "Customer Relationship Management",
        price: 12000,
      },
      {
        id: "erp",
        name: "Enterprise Resource Planning",
        price: 30000,
      },
      {
        id: "reporting",
        name: "Reports and Business Analytics",
        price: 6500,
      },
    ],
  },

  {
    title: "Bookings and Operational Systems",
    description:
      "Custom workflows for appointments, operations, and service delivery.",
    features: [
      {
        id: "booking-system",
        name: "Booking and Appointment System",
        price: 7500,
      },
      {
        id: "order-management",
        name: "Order Management System",
        price: 8500,
      },
      {
        id: "project-management",
        name: "Project Management System",
        price: 12500,
      },
      {
        id: "delivery-tracking",
        name: "Delivery and Order Tracking",
        price: 15000,
      },
      {
        id: "notifications",
        name: "Email and In-App Notifications",
        price: 4500,
      },
      {
        id: "document-management",
        name: "Document Management",
        price: 8500,
      },
    ],
  },

  {
    title: "Mobile and Advanced Technology",
    description:
      "Mobile applications, integrations, cloud infrastructure, and automation.",
    features: [
      {
        id: "pwa",
        name: "Progressive Web App",
        price: 8500,
      },
      {
        id: "android-app",
        name: "Android Mobile Application",
        price: 25000,
      },
      {
        id: "ios-app",
        name: "iOS Mobile Application",
        price: 30000,
      },
      {
        id: "api-development",
        name: "Custom API Development",
        price: 12000,
      },
      {
        id: "third-party-api",
        name: "Third-Party API Integration",
        price: 5500,
      },
      {
        id: "cloud-setup",
        name: "Cloud Infrastructure Setup",
        price: 8500,
      },
      {
        id: "ai-chatbot",
        name: "AI Chatbot Integration",
        price: 9500,
      },
      {
        id: "workflow-automation",
        name: "Workflow Automation",
        price: 12000,
      },
    ],
  },

  {
    title: "SEO, Security and Performance",
    description:
      "Improve visibility, reliability, compliance, and platform speed.",
    features: [
      {
        id: "basic-seo",
        name: "Basic SEO Setup",
        price: 1800,
      },
      {
        id: "advanced-seo",
        name: "Advanced SEO Optimisation",
        price: 5500,
      },
      {
        id: "analytics",
        name: "Google Analytics Setup",
        price: 1200,
      },
      {
        id: "business-profile",
        name: "Google Business Profile Setup",
        price: 1200,
      },
      {
        id: "performance",
        name: "Speed and Performance Optimisation",
        price: 3500,
      },
      {
        id: "security",
        name: "Advanced Website Security",
        price: 4500,
      },
      {
        id: "backup",
        name: "Backup and Recovery Setup",
        price: 2500,
      },
      {
        id: "popia",
        name: "POPIA Compliance Preparation",
        price: 3500,
      },
    ],
  },
];

const budgetOptions = [
  "Below R5,000",
  "R5,000 – R15,000",
  "R15,000 – R30,000",
  "R30,000 – R50,000",
  "R50,000 – R100,000",
  "R100,000+",
  "I need guidance",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2–4 weeks",
  "Within 1–2 months",
  "Within 3–6 months",
  "More than 6 months",
  "No fixed deadline",
];

const projectTypeOptions = [
  "Business Website",
  "E-Commerce Website",
  "Web Application",
  "Android Application",
  "iOS Application",
  "Web and Mobile Platform",
  "Business Management System",
  "Other",
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);

const Quotation = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const packageFromUrl = searchParams.get("package");

  const validInitialPackage =
    packageFromUrl && packageOptions[packageFromUrl]
      ? packageFromUrl
      : "";

  const [packageType, setPackageType] = useState(validInitialPackage);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem("pendingQuote");

    if (!savedDraft) {
      return;
    }

    try {
      const parsedDraft = JSON.parse(savedDraft);

      if (
        parsedDraft.packageType &&
        packageOptions[parsedDraft.packageType]
      ) {
        setPackageType(parsedDraft.packageType);
      }

      setSelectedFeatures(parsedDraft.selectedFeatures || []);
      setBusinessName(parsedDraft.businessName || "");
      setContactName(parsedDraft.contactName || "");
      setContact(parsedDraft.contact || "");
      setProjectType(parsedDraft.projectType || "");
      setBudget(parsedDraft.budget || "");
      setTimeline(parsedDraft.timeline || "");
      setWebsite(parsedDraft.website || "");
      setDescription(parsedDraft.description || "");
    } catch (draftError) {
      console.error("Failed to restore quotation draft:", draftError);
      localStorage.removeItem("pendingQuote");
    }
  }, []);

  useEffect(() => {
    if (validInitialPackage) {
      setPackageType(validInitialPackage);
    }
  }, [validInitialPackage]);

  const selectedPackage = packageType
    ? packageOptions[packageType]
    : null;

  const allFeatures = useMemo(
    () => featureGroups.flatMap((group) => group.features),
    []
  );

  const selectedFeatureDetails = useMemo(
    () =>
      selectedFeatures
        .map((featureId) =>
          allFeatures.find((feature) => feature.id === featureId)
        )
        .filter(Boolean),
    [selectedFeatures, allFeatures]
  );

  const addOnsTotal = useMemo(
    () =>
      selectedFeatureDetails.reduce(
        (total, feature) => total + feature.price,
        0
      ),
    [selectedFeatureDetails]
  );

  const estimatedTotal =
    (selectedPackage?.basePrice || 0) + addOnsTotal;

  const quotationDraft = {
    packageType,
    selectedFeatures,
    businessName,
    contactName,
    contact,
    projectType,
    budget,
    timeline,
    website,
    description,
  };

  const handleFeatureChange = (featureId) => {
    setSelectedFeatures((currentFeatures) => {
      if (currentFeatures.includes(featureId)) {
        return currentFeatures.filter((id) => id !== featureId);
      }

      return [...currentFeatures, featureId];
    });
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      "pendingQuote",
      JSON.stringify(quotationDraft)
    );

    setSuccess("Your quotation draft has been saved on this device.");
    setError("");
  };

  const validateForm = () => {
    if (!packageType) {
      return "Please select a development package.";
    }

    if (!businessName.trim()) {
      return "Please enter your business or organisation name.";
    }

    if (!contactName.trim()) {
      return "Please enter the main contact person's name.";
    }

    if (!contact.trim()) {
      return "Please enter a phone number or email address.";
    }

    if (!projectType) {
      return "Please select the type of project you need.";
    }

    if (!budget) {
      return "Please select your estimated budget.";
    }

    if (!timeline) {
      return "Please select your preferred project timeline.";
    }

    if (description.trim().length < 20) {
      return "Please provide more information about your project.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    localStorage.setItem(
      "pendingQuote",
      JSON.stringify(quotationDraft)
    );

    if (!currentUser) {
      navigate("/login", {
        state: {
          from: "/quotation",
          message:
            "Log in or create an account to submit and save your quotation.",
        },
      });

      return;
    }

    const quoteData = {
      packageType,
      packageName: selectedPackage.name,
      packageStartingPrice: selectedPackage.basePrice,

      selectedFeatureIds: selectedFeatures,
      features: selectedFeatureDetails.map((feature) => ({
        id: feature.id,
        name: feature.name,
        estimatedPrice: feature.price,
      })),

      addOnsEstimatedTotal: addOnsTotal,
      estimatedTotal,

      businessName: businessName.trim(),
      contactName: contactName.trim(),
      contact: contact.trim(),
      projectType,
      budget,
      timeline,
      website: website.trim(),
      description: description.trim(),

      userId: currentUser.uid,
      userEmail: currentUser.email,

      status: "Submitted",
      createdAt: serverTimestamp(),
      createdAtISO: new Date().toISOString(),
    };

    try {
      setSubmitting(true);

      await addDoc(collection(db, "quotes"), quoteData);

      localStorage.removeItem("pendingQuote");

      setSuccess(
        "Your quotation request was submitted successfully."
      );

      navigate("/invoices");
    } catch (submitError) {
      console.error("Failed to submit quotation:", submitError);

      setError(
        "Your quotation could not be submitted. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="quotation-page">
      <div className="quotation-page-container">
        <button
          type="button"
          className="quotation-back-button"
          onClick={() => navigate("/dev")}
        >
          <FiArrowLeft aria-hidden="true" />
          Back to Packages
        </button>

        <section className="quotation-header">
          <p className="quotation-kicker">Project Quotation</p>

          <h1>Build a quotation around your actual business needs.</h1>

          <p>
            Choose a package, add the functionality you need, and tell
            us about your business. The amount shown is an initial
            estimate and not the final formal quotation.
          </p>
        </section>

        <form className="quotation-layout" onSubmit={handleSubmit}>
          <div className="quotation-form-column">
            {error && (
              <div className="quotation-message quotation-error">
                {error}
              </div>
            )}

            {success && (
              <div className="quotation-message quotation-success">
                {success}
              </div>
            )}

            <section className="quotation-form-section">
              <div className="quotation-section-heading">
                <span>1</span>

                <div>
                  <h2>Select your package</h2>
                  <p>
                    Choose the package closest to the project you need.
                  </p>
                </div>
              </div>

              <div className="quotation-package-options">
                {Object.values(packageOptions).map((plan) => (
                  <label
                    className={`quotation-package-option ${
                      packageType === plan.id
                        ? "quotation-package-option-selected"
                        : ""
                    }`}
                    key={plan.id}
                  >
                    <input
                      type="radio"
                      name="packageType"
                      value={plan.id}
                      checked={packageType === plan.id}
                      onChange={(event) =>
                        setPackageType(event.target.value)
                      }
                    />

                    <div>
                      <strong>{plan.name}</strong>
                      <span>{plan.displayPrice}</span>
                      <p>{plan.description}</p>
                    </div>

                    {packageType === plan.id && (
                      <FiCheck
                        className="quotation-selected-icon"
                        aria-hidden="true"
                      />
                    )}
                  </label>
                ))}
              </div>
            </section>

            <section className="quotation-form-section">
              <div className="quotation-section-heading">
                <span>2</span>

                <div>
                  <h2>Add project features</h2>
                  <p>
                    Select all the additional functions relevant to your
                    project.
                  </p>
                </div>
              </div>

              <div className="quotation-feature-groups">
                {featureGroups.map((group) => (
                  <div
                    className="quotation-feature-group"
                    key={group.title}
                  >
                    <div className="quotation-feature-group-heading">
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>

                    <div className="quotation-feature-list">
                      {group.features.map((feature) => {
                        const isSelected =
                          selectedFeatures.includes(feature.id);

                        return (
                          <label
                            className={`quotation-feature-option ${
                              isSelected
                                ? "quotation-feature-option-selected"
                                : ""
                            }`}
                            key={feature.id}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() =>
                                handleFeatureChange(feature.id)
                              }
                            />

                            <span className="quotation-checkbox">
                              {isSelected && (
                                <FiCheck aria-hidden="true" />
                              )}
                            </span>

                            <span className="quotation-feature-name">
                              {feature.name}
                            </span>

                            <span className="quotation-feature-price">
                              +{formatCurrency(feature.price)}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="quotation-form-section">
              <div className="quotation-section-heading">
                <span>3</span>

                <div>
                  <h2>Tell us about the business</h2>
                  <p>
                    Provide the basic information needed to understand
                    your organisation.
                  </p>
                </div>
              </div>

              <div className="quotation-field-grid">
                <div className="quotation-field quotation-field-full">
                  <label htmlFor="businessName">
                    Business or organisation name
                  </label>

                  <input
                    id="businessName"
                    type="text"
                    value={businessName}
                    onChange={(event) =>
                      setBusinessName(event.target.value)
                    }
                    placeholder="Example: LPTB Solutions Pty Ltd"
                  />
                </div>

                <div className="quotation-field">
                  <label htmlFor="contactName">
                    Contact person's name
                  </label>

                  <input
                    id="contactName"
                    type="text"
                    value={contactName}
                    onChange={(event) =>
                      setContactName(event.target.value)
                    }
                    placeholder="Full name"
                  />
                </div>

                <div className="quotation-field">
                  <label htmlFor="contact">
                    Phone number or email
                  </label>

                  <input
                    id="contact"
                    type="text"
                    value={contact}
                    onChange={(event) =>
                      setContact(event.target.value)
                    }
                    placeholder="Your preferred contact details"
                  />
                </div>

                <div className="quotation-field quotation-field-full">
                  <label htmlFor="website">
                    Existing website or social page
                    <span>Optional</span>
                  </label>

                  <input
                    id="website"
                    type="text"
                    value={website}
                    onChange={(event) =>
                      setWebsite(event.target.value)
                    }
                    placeholder="https://yourbusiness.co.za"
                  />
                </div>
              </div>
            </section>

            <section className="quotation-form-section">
              <div className="quotation-section-heading">
                <span>4</span>

                <div>
                  <h2>Project requirements</h2>
                  <p>
                    Help us understand the type, budget, and expected
                    delivery period.
                  </p>
                </div>
              </div>

              <div className="quotation-field-grid">
                <div className="quotation-field">
                  <label htmlFor="projectType">Project type</label>

                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(event) =>
                      setProjectType(event.target.value)
                    }
                  >
                    <option value="">Select project type</option>

                    {projectTypeOptions.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quotation-field">
                  <label htmlFor="budget">Estimated budget</label>

                  <select
                    id="budget"
                    value={budget}
                    onChange={(event) =>
                      setBudget(event.target.value)
                    }
                  >
                    <option value="">Select budget range</option>

                    {budgetOptions.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quotation-field quotation-field-full">
                  <label htmlFor="timeline">
                    Preferred completion timeline
                  </label>

                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(event) =>
                      setTimeline(event.target.value)
                    }
                  >
                    <option value="">Select timeline</option>

                    {timelineOptions.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quotation-field quotation-field-full">
                  <label htmlFor="description">
                    Describe the project
                  </label>

                  <textarea
                    id="description"
                    value={description}
                    onChange={(event) =>
                      setDescription(event.target.value)
                    }
                    placeholder="Tell us what your business does, the problem you want to solve, the users of the system, and the main functionality you need."
                    rows="8"
                  />

                  <small>
                    Include as much relevant information as possible.
                  </small>
                </div>
              </div>
            </section>

            <div className="quotation-form-actions">
              <button
                type="button"
                className="quotation-save-button"
                onClick={handleSaveDraft}
              >
                <FiSave aria-hidden="true" />
                Save Draft
              </button>

              <button
                type="submit"
                className="quotation-submit-button"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting Quote..."
                  : currentUser
                    ? "Submit Quote"
                    : "Log In and Submit Quote"}

                {!submitting && (
                  <FiChevronRight aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <aside className="quotation-summary">
            <div className="quotation-summary-card">
              <p className="quotation-summary-kicker">
                Quote Summary
              </p>

              <h2>
                {selectedPackage
                  ? selectedPackage.name
                  : "No package selected"}
              </h2>

              {selectedPackage ? (
                <>
                  <p className="quotation-summary-description">
                    {selectedPackage.description}
                  </p>

                  <div className="quotation-summary-row">
                    <span>Package starting price</span>
                    <strong>
                      {formatCurrency(selectedPackage.basePrice)}
                    </strong>
                  </div>
                </>
              ) : (
                <p className="quotation-summary-description">
                  Select a package to begin calculating your estimate.
                </p>
              )}

              <div className="quotation-summary-features">
                <div className="quotation-summary-features-heading">
                  <span>Additional features</span>
                  <strong>{selectedFeatureDetails.length}</strong>
                </div>

                {selectedFeatureDetails.length === 0 ? (
                  <p className="quotation-summary-empty">
                    No additional features selected.
                  </p>
                ) : (
                  <ul>
                    {selectedFeatureDetails.map((feature) => (
                      <li key={feature.id}>
                        <span>{feature.name}</span>
                        <strong>
                          {formatCurrency(feature.price)}
                        </strong>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="quotation-summary-row">
                <span>Add-ons estimate</span>
                <strong>{formatCurrency(addOnsTotal)}</strong>
              </div>

              <div className="quotation-summary-total">
                <span>Indicative estimate</span>
                <strong>{formatCurrency(estimatedTotal)}</strong>
              </div>

              <div className="quotation-summary-notice">
                <FiInfo aria-hidden="true" />

                <p>
                  This is an initial estimate only. LPTB Solutions will
                  review the requirements and issue a formal quotation
                  after consultation.
                </p>
              </div>

              {!currentUser && (
                <div className="quotation-login-notice">
                  <strong>Account required for submission</strong>

                  <p>
                    You may build and save your quote before logging in.
                    Your selected information will remain available when
                    you proceed to login.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
};

export default Quotation;