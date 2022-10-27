import { IMAGES } from "../../assets/images/index.js";
import { Button, Image, Row, Col } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { PATH } from "../../config.js";

function Header({ value, setFunc, windowWidth }) {
  const auth = useAuth();
  const handleClick = () => {
    setFunc(!value);
  };

  return (
    <Row className="px-3 d-flex justify-content-between dashboard-header py-4 pb-5">
      <Col className="d-flex align-items-center">
        {windowWidth <= 992 && (
          <button
            onClick={() => handleClick()}
            className="toggle-btn sidenav---sidenav-toggle---1KRjR"
          >
            <span className="sidenav---icon-bar---u1f02"></span>
            <span className="sidenav---icon-bar---u1f02"></span>
            <span className="sidenav---icon-bar---u1f02"></span>
          </button>
        )}
        <Link to="/">
          <Image
            className="dashboard-header-icon"
            src={IMAGES.DASHBOARDINNOVALOGO}
          />
        </Link>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <FaRegBell className="mr-3 bell-icon" fill="white" size={20} />
        {auth &&
          auth.innova_user &&
          auth.innova_user.role &&
          auth.innova_user.role === "Patient" && (
            <>
              <Link
                to={PATH.PATIENT_BOOKAPPOINTMENT}
                className="primary-bg-btn mx-1 text-center p-3"
              >
                Book Appointment
              </Link>
              <Button className="primary-bg-btn mx-1 p-3">
                Medical Consultation
              </Button>
            </>
          )}
      </Col>
    </Row>
  );
}
export default Header;
