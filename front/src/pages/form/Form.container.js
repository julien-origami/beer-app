import { connect } from "react-redux";
import { createBeer } from "../../redux/state/beers";
import ListForm from "./Form.component";

const mapStateToProps = state => {
  return {
    loading: state.beers.loading
  };
};

const mapDispatchToProps = { createBeer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
