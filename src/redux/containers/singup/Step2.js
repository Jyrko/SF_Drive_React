import { connect } from 'react-redux';
import { addStep2 } from '../../actions/registration';
import Step2 from '~/components/singup_page/Step2';

const mapDispatchToProps = dispatch => ({
  addStep2: (step2) => dispatch(addStep2(step2))
});

export default connect(null, mapDispatchToProps)(Step2);
