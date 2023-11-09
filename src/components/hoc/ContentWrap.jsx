import "./contentWrapperStyles.scss";
import PropTypes from "prop-types";

// export const ContentWrap = (Component) => {
//   function HOC() {
//     return (
//       <section className="contentWrapper">
//         <Component />
//       </section>
//     );
//   }
//   return HOC;
// };

export const ContentWrap = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

ContentWrap.propTypes = {
  children: PropTypes.node.isRequired,
};
