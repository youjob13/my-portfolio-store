import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import AboutMe from "./AboutMe";
import Characteristic from "./Characteristic";
import MainSectionProduct from "./MainSectionProduct";
import Social from "./Social";
import { getGoods } from "../../../store/reducers/goods";

const Product = (props) => {
  let productId = props.match.params.id;
  if (productId === null || props.goods.length === 0) return <div>none</div>;
  const product = props.goods.find((item) => item.id == productId);

  return (
    <div>
      <MainSectionProduct product={product} />
      <AboutMe product={product} />
      <Characteristic product={product} />
      <Social product={product} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  goods: state.goods.goods,
});

export default compose(
  connect(mapStateToProps, { getGoods }),
  withRouter
)(Product);
