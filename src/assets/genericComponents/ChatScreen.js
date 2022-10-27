import React, { useEffect, useState } from "react";
import { IMAGES } from "../images";
import {
  FaSearch,
  FaPlusCircle,
  FaPhoneAlt,
  FaVideo,
  FaPaperclip,
  FaTelegramPlane,
  FaEllipsisV,
  FaDownload,
  FaPhoneSlash,
  FaArrowLeft,
} from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const ChatScreen = () => {
  useEffect(() => {
    document.title = "CHAT || INNOVA";
  });
  let history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [activeMobileScreen, setActiveMobileScreen] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div className="row">
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="md">
        <div class="call-box incoming-box my-3">
          <div class="call-wrapper">
            <div class="call-inner">
              <div class="call-user">
                <img
                  alt="User"
                  src={IMAGES.AVATAR}
                  class="call-avatar w-25 rounded-circle"
                />
                <h4>Dr. Darren Elder</h4>
                <span>Connecting...</span>
              </div>
              <div class="call-items">
                <Link
                  to={history.location.pathname}
                  href="0"
                  class="btn call-item call-end"
                >
                  <FaPhoneSlash />
                </Link>
                <Link
                  to={history.location.pathname}
                  href="0"
                  class="btn call-item call-start"
                >
                  <FaPhoneAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="col-xl-12">
        <div className="chat-window">
          {(isMobile === false || activeMobileScreen === 1) && (
            <div className="chat-cont-left">
              <div className="chat-header">
                <span>Chats</span>
                <Link to={history.location.pathname} className="chat-compose">
                  <FaPlusCircle />
                </Link>
              </div>
              <form className="chat-search">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <FaSearch />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </form>
              <div className="chat-users-list">
                <div className="chat-scroll">
                  <Link
                    to={history.location.pathname}
                    className="media"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Richard Wilson</div>
                        <div className="user-last-chat">Hey, How are you?</div>
                      </div>
                      <div>
                        <div className="last-chat-time block">2 min</div>
                        <div className="badge badge-success badge-pill">15</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat active"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Charlene Reed</div>
                        <div className="user-last-chat">
                          I'll call you later{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">8:01 PM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Travis Trimble </div>
                        <div className="user-last-chat">
                          Give me a full explanation about our project
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">7:30 PM</div>
                        <div className="badge badge-success badge-pill">3</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Carl Kelly</div>
                        <div className="user-last-chat">
                          That's very good UI design
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">6:59 PM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-offline">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Michelle Fairfax</div>
                        <div className="user-last-chat">
                          Yesterday i completed the task
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">11:21 AM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Gina Moore</div>
                        <div className="user-last-chat">
                          What is the major functionality?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">10:05 AM</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Elsie Gilley</div>
                        <div className="user-last-chat">
                          This has allowed me to showcase not only my technical
                          skills
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Yesterday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-offline">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Joan Gardner</div>
                        <div className="user-last-chat">
                          Let's talk briefly in the evening.{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Sunday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Daniel Griffing</div>
                        <div className="user-last-chat">
                          Do you have any collections? If so, what of?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Saturday</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={history.location.pathname}
                    className="media read-chat"
                    onClick={() =>
                      isMobile === true ? setActiveMobileScreen(2) : ""
                    }
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Walter Roberson</div>
                        <div className="user-last-chat">
                          Connect the two modules with in 1 day.
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Friday</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {(isMobile === false || activeMobileScreen === 2) && (
            <div className="chat-cont-right">
              <div className="chat-header">
                <Link
                  to={history.location.pathname}
                  id="back_user_list"
                  href="#0"
                  className="back-user-list"
                >
                  <FaPhoneAlt />
                </Link>
                <div className="media">
                  {isMobile === true && (
                    <div className="arrowBack">
                      <Link
                        to={history.location.pathname}
                        onClick={() => setActiveMobileScreen(1)}
                      >
                        <FaArrowLeft />
                      </Link>
                    </div>
                  )}
                  <div className="media-img-wrap">
                    <div className="avatar avatar-online">
                      <img
                        src={IMAGES.AVATAR}
                        alt="User "
                        className="avatar-img w-100 rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="user-name">Richard Wilson</div>
                    <div className="user-status">online</div>
                  </div>
                </div>
                <div className="chat-options">
                  <Link
                    to={history.location.pathname}
                    href="#0"
                    onClick={() => setModalShow(true)}
                  >
                    <FaPhoneAlt />
                  </Link>
                  <Link
                    to={history.location.pathname}
                    href="#0"
                    onClick={() => setModalShow(true)}
                  >
                    <FaVideo />
                  </Link>
                  <Link to={history.location.pathname} href="#0">
                    <FaEllipsisV />
                  </Link>
                </div>
              </div>
              <div className="chat-body">
                <div className="chat-scroll">
                  <ul className="list-unstyled">
                    <li className="media sent">
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>Hello. What can I do for you?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:30 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received">
                      <div className="avatar">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>I'm just looking around.</p>
                            <p>Will you tell me something about yourself?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:35 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <p>Are you there? That time!</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:40 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <div className="chat-msg-attachments">
                              <div className="chat-attachment">
                                <img src={IMAGES.AVATAR} alt="Attachment" />
                                <div className="chat-attach-caption">
                                  placeholder.jpg
                                </div>
                                <Link
                                  to={history.location.pathname}
                                  href="#0"
                                  className="chat-attach-download"
                                >
                                  <FaDownload />
                                </Link>
                              </div>
                              <div className="chat-attachment">
                                <img src={IMAGES.AVATAR} alt="Attachment" />
                                <div className="chat-attach-caption">
                                  placeholder.jpg
                                </div>
                                <Link
                                  to={history.location.pathname}
                                  href="#0"
                                  className="chat-attach-download"
                                >
                                  <FaDownload />
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:41 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media sent">
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>Where?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:42 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <p>
                              OK, my name is Limingqiang. I like singing,
                              playing basketballand so on.
                            </p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:42 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="msg-box">
                          <div>
                            <div className="chat-msg-attachments">
                              <div className="chat-attachment">
                                <img src={IMAGES.AVATAR} alt="Attachment" />
                                <div className="chat-attach-caption">
                                  placeholder.jpg
                                </div>
                                <Link
                                  to={history.location.pathname}
                                  href="#0"
                                  className="chat-attach-download"
                                >
                                  <FaDownload />
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:50 AM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received">
                      <div className="avatar">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>You wait for notice.</p>
                            <p>Consectetuorem ipsum dolor sit?</p>
                            <p>Ok?</p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>8:55 PM</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="chat-date">Today</li>
                    <li className="media received">
                      <div className="avatar">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,
                            </p>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>10:17 AM</span>
                                </div>
                              </li>
                              <li>
                                <Link to={history.location.pathname} href="#0">
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media sent">
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <p>Lorem ipsum dollar sit</p>
                            <div className="chat-msg-actions dropdown">
                              <Link
                                to={history.location.pathname}
                                href="#0"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fe fe-elipsis-v"></i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  to={history.location.pathname}
                                  className="dropdown-item"
                                  href="#0"
                                >
                                  Delete
                                </Link>
                              </div>
                            </div>
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  <span>10:19 AM</span>
                                </div>
                              </li>
                              <li>
                                <Link to={history.location.pathname} href="#0">
                                  Edit
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received">
                      <div className="avatar">
                        <img
                          src={IMAGES.AVATAR}
                          alt="User "
                          className="avatar-img w-100 rounded-circle"
                        />
                      </div>
                      <div className="media-body">
                        <div className="msg-box">
                          <div>
                            <div className="msg-typing">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-footer">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="btn-file btn">
                      <input type="file" />
                      <FaPaperclip />
                      <input type="file" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="input-msg-send form-control"
                    placeholder="Type something"
                  />
                  <div className="input-group-append">
                    <button type="button" className="btn msg-send-btn">
                      <FaTelegramPlane />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
