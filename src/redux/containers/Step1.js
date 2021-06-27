import { connect } from 'react-redux';
import { addStep1 } from '../actions/registration';
import Step1 from '../../components/singup_page/Step1';

const mapDispatchToProps = dispatch => ({
  addStep1: (step1) => dispatch(addStep1(step1))
})

export default connect(null, mapDispatchToProps)(Step1);
