import "./contentWrapperStyles.scss";
import PropTypes from "prop-types";

export const ContentWrap = ({ children }) => {
  return <section className="contentWrapper">{children}</section>;
};

ContentWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

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
