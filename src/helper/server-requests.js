import { instance as axios } from "./axios";
export const signUpHandler = async (e, setFormFields, login, formFields) => {
  const { name, email, password, confirmPass } = formFields;

  e.preventDefault();
  if (password !== confirmPass) {
    setFormFields({
      ...formFields,
      error: true,
      message: "Passwords don't match!",
    });
    return;
  }

  try {
    setFormFields({
      ...formFields,
      loader: true,
    });
    const { data } = await axios.post("/signup", {
      name,
      email,
      password,
    });
    setFormFields({
      ...formFields,
      loader: false,
    });
    login(data);
  } catch (err) {
    setFormFields({
      ...formFields,
      error: true,
      message: "User already exists!",
    });
  }
};

export const loginHandler = async (e, setFormFields, login, formFields) => {
  const { email, password } = formFields;
  e.preventDefault();
  try {
    setFormFields({ ...formFields, loader: true });
    const { data } = await axios.post("/signin", {
      email,
      password,
    });
    setFormFields({ ...formFields, loader: false });
    login(data);
  } catch (err) {
    setFormFields({ ...formFields, error: true });
  }
};

export const addTask = async (token, task, dispatch, setLoader) => {
  setLoader(true);
  const response = await axios.post("/api/note", task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setLoader(false);
  dispatch({ type: "ADD_TODO", payload: response.data.data });
};

export const updateTask = async (token, task, dispatch, setLoader) => {
  setLoader(true);
  const response = await axios.put(`/api/note/${task._id}`, task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setLoader(false);
  dispatch({ type: "ADD_TODO", payload: response.data.data });
};
export const deleteTask = async (token, task, dispatch, setLoader) => {
  setLoader(true);
  const response = await axios.delete(`/api/note/${task._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setLoader(false);
  dispatch({ type: "ADD_TODO", payload: response.data.data });
};
export const getAllNotes = async (token, dispatch, setLoader) => {
  setLoader(true);
  const response = await axios.get(`/api/note`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setLoader(false);
  dispatch({ type: "ADD_TODO", payload: response.data.data });
};
