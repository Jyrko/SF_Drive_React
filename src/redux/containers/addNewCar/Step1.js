import { connect } from 'react-redux';
import { addCarStep1 } from '../../actions/addNewCar';
import Step1 from '~/components/authed_user/add_new_car/Step1';

const mapDispatchToProps = dispatch => ({
  addCarStep1: (step1) => dispatch(addCarStep1(step1))
})

export default connect(null, mapDispatchToProps)(Step1);
