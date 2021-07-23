import { connect } from 'react-redux';
import { addCarStep3 } from '../../actions/addNewCar';
import Step3 from '~/components/authed_user/add_new_car/Step3';

const mapDispatchToProps = dispatch => ({
  addCarStep3: (step3) => dispatch(addCarStep3(step3))
})

export default connect(null, mapDispatchToProps)(Step3);
