import { connect } from 'react-redux';
import Confirmation from "~/components/singup_page/Confirmation";

const mapStateToProps = (state) => ({
  currentUser: state
})

export default connect(mapStateToProps)(Confirmation);
