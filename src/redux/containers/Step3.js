import { connect } from 'react-redux';
import { addStep3 } from '../actions/registration';
import Step3 from '~/components/singup_page/Step3';

const mapStateToProps = (state) => ({
  currentUser: state
})

const mapDispatchToProps = (dispatch) => ({
  addStep3: (step3) => dispatch(addStep3(step3))
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
