import { connect } from 'react-redux';
import { addCarStep2 } from '../../actions/addNewCar';
import Step2 from '~/components/authed_user/add_new_car/Step2';

const mapDispatchToProps = dispatch => ({
  addCarStep2: (step2) => dispatch(addCarStep2(step2))
})

export default connect(null, mapDispatchToProps)(Step2);
