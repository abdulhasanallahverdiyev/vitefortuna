import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../httpRequest/httpRequest';
export const mainContext = createContext(null);
function ContextApi({ children }) {
  const initialSubscribe = {
    email: '',
  };
  const [visible, setVisibile] = useState(3);
  const [open, setOpen] = useState(false);
  const [collaborator, setCollaborator] = useState(null);
  const [subState, setSubState] = useState(initialSubscribe);
  const [service, setService] = useState([]);
  const [latest, setLatest] = useState([]);
  const [spinLoad, setSpinLoad] = useState('');
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000);
  }, []);
  //! collaborator get
  const getCollabrator = async () => {
    const response = await axios.get(`${BASE_URL}core-api/collaborator`);
    setCollaborator(response.data);
  };
  const getLatesWork = async () => {
    const response = await axios.get(`${BASE_URL}service-api/last_works/`);
    setLatest(response.data);
  };
  const showMoreWork = () => {
    setSpinLoad(true);
    setTimeout(() => {
      setVisibile((prevValue) => prevValue + 3);
      setSpinLoad(false);
    }, 3000);
  };
  //!get services data
  const getService = async () => {
    const response = await axios.get(`${BASE_URL}service-api/services/`);
    setService(response.data);
  };
  //! handle change subscribe
  const handleSubChange = (e) => {
    const state = e.target;
    setSubState({
      ...subState,
      [state.name]: state.value,
    });
  };

  // !sweet alert

  // //!post data

  // !post  data subscribe
  const postSubData = (e) => {
    e.preventDefault();
    if (!subState.email) return;
    axios.post(`${BASE_URL}core-api/subscribe/`, subState);
    setSubState(initialSubscribe);
    Swal.fire({
      title: 'Uğurlu',
      text: 'Mesaj  göndərildi',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  useEffect(() => {
    getCollabrator();
    getService();
    getLatesWork();
  }, []);
  const handleOpen = () => {
    setOpen(!open);
    setSidebarActive(!sidebarActive);
  };
  const Values = {
    handleOpen,
    open,
    loading,
    collaborator,
    subState,
    postSubData,
    handleSubChange,
    service,
    latest,
    visible,
    showMoreWork,
    spinLoad,
    handleSelect,
    select,
    sidebarActive
  };
  return <mainContext.Provider value={Values}>{children}</mainContext.Provider>;
}

export default ContextApi;
