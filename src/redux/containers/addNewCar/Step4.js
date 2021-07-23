import { connect } from 'react-redux';
import { addCarStep4 } from '../../actions/addNewCar';
import Step4 from '~/components/authed_user/add_new_car/Step4';

const mapStateToProps = (state) => ({
  currentCar: state.car
})

const mapDispatchToProps = (dispatch) => ({
  addStep4: (step4) => dispatch(addCarStep4(step4))
});

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
