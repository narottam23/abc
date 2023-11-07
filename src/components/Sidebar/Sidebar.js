import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/dashbaord/service-home",
    name: "Service Home",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/services",
        name: "Services ",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/parlor-packages",
        name: "Packages",
        icon: <FaUser />,
      },
    ],
  },

  {
    path: "/dashboard/appointment-home",
    name: "Appointment Home",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/new-appointment",
        name: "New Appointment",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/sell-subscription",
        name: "Sell Subscription",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/completed-appointment",
        name: "Completed Appointment",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/authorized-appointment",
        name: "Authorized Appointment",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/calender-view",
        name: "Calender View",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/appt",
        name: "Appt",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/book",
        name: "Book",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/newbook",
        name: "New Book",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/dashboard/employee-home",
    name: "Employee Home",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/employees",
        name: "Employees",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/dashboard/inventory",
    name: "Inventory",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/inventory-management",
        name: "Inventory Management",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/all-products",
        name: "All Products",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/discount-model",
        name: "Discount Model",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/recent-po",
        name: "Recent PO's",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/reorder-by-brand",
        name: "Reorder By Brand",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/reorder",
        name: "Reorder",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/product-delivery-items",
        name: "Product Delivery Items",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/discount-bucket",
        name: "Discount Bucket",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/credit-ledge",
        name: "Credit Ledge",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/dashboard/salon-image",
    name: "Salon Image",
    icon: <FaHome />,
  },

  {
    path: "/dashbaord/product-shop",
    name: "Product Shop",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/product-orders",
        name: "Product Orders",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/product-settlement",
        name: "Product Settlement",
        icon: <FaUser />,
      },
    ],
  },

  {
    path: "/dashboard/reports",
    name: "Reports",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/daily-summary",
        name: "Daily Summary",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/weekly-report",
        name: "Weekly Report",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/redemption",
        name: "Membership Sale/Redemption",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/addition-reports",
        name: "Additions Report",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employee-customer-repeat-report",
        name: "Employee Customer Repeat Report",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/family-wallet-sold",
        name: "Membership/Family Wallet Sold",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/revenue",
        name: "Revenue",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/invoice-wise-collection",
        name: "Invoice Wise Collection",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employee-wise-collection",
        name: "Employee Wise Collection",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/owner-branch-revenue",
        name: "Owner Branch Revenue",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/owner-vital-report",
        name: "Owner Vital Report",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/salons-coupen-used",
        name: "Salons Coupen Used",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employees",
        name: "Employees",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/day-wise-collection",
        name: "Day Wise Collection",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/non-repeating-customer",
        name: "Non Repeating Customer",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/home-service-reports",
        name: "Home Service Reports",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/dashbaord/expenses",
    name: "Expenses",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/create-expense",
        name: "Create an Expense",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/profit-loss",
        name: "Profit And Loss",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/dashbaord/marketing",
    name: "Marketing",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/sms-to-customer",
        name: "Sms to Customer",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/parlor-packages",
        name: "Packages",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/dashboard/uploadimage",
    name: "Upload Image",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/customers",
    name: "Customers",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/salonreview",
    name: "Salon Review",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/sendmessage",
    name: "Send Message",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/home-service-message",
    name: "Send Home Service Message",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/salondetails",
    name: "Salon Details",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/search-customer-details",
    name: "search Customer details",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/admin-reports",
    name: "Admin Reports",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/inventory-management",
        name: "Flash Sale Appointment",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/all-products",
        name: "Customer Month Cohort",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/Parlor-data",
        name: "Parlor Data",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/quarterly-settlement",
        name: "Quarterly Settlement",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/payment-breakup-wise",
        name: "Payment Breakup Wise",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/razorpay",
        name: "Razorpay",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/dashboard/salon-reports",
    name: "Salon Reports",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/service-report",
        name: "Service Report",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/weekly-revenue",
        name: "Weekly Revenue",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/salon-recommendation",
        name: "Salon Recommendation",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/incentive-report",
        name: "Incentive Report",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employeee-segment",
        name: "Employees Segment",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employees-performation",
        name: "Employees Performance",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/dashboard/settlement",
    name: "Settlement",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/payment-failed",
        name: "Payment Failed",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/salon-level",
        name: "Salon Level",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/month-ledger",
        name: "Month Ledger",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/settlement-invoice",
        name: "Settlement Invoice",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/reorder-by-brand",
        name: "Signup Invoice",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/yearly-invoice",
        name: "Yearly Invoice",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/dashboard/search-otp",
    name: "Search Otp",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/coupen-code",
    name: "Coupen Code",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/deal-menu",
    name: "Deal Menu",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/new-deal-menu",
    name: "New Deal Menu",
    icon: <FaHome />,
  },

  {
    path: "/dashboard/tutorial",
    name: "Tutorial",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/dashboard/salon-detail",
        name: "Salon Detail",
        icon: <FaUser />,
      },
      {
        path: "/dashboard/appointment",
        name: "Appointment",
        icon: <FaLock />,
      },
      {
        path: "/dashboard/employee-app-update",
        name: "Employee App Update",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/employee",
        name: "Employee",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/inventory",
        name: "Inventory",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/purchase",
        name: "Purchase",
        icon: <FaMoneyBill />,
      },

      {
        path: "/dashboard/reports",
        name: "Reports",
        icon: <FaMoneyBill />,
      },
      {
        path: "/dashboard/financial-details",
        name: "Financial Details",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/dashboard/music-player",
    name: "Music Player",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/salon-subscription",
    name: "Salon Subscription",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/block-service-pincode",
    name: "Block Service By Pincode",
    icon: <FaHome />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/*<div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
              </div>*/}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
