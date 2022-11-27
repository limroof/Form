import {
  Banner,
  H1R,
  Container,
  H1,
  SignupForm,
  Form,
  Input,
  Button,
} from "./Styles/Signup";
import spinner from "../../Assets/img/spinner-6.png";
import { useEffect, useState } from "react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSuccessful, setIsFormSuccessful] = useState(false);
  const [showError, setShowError] = useState();

  let handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const myFormData = new FormData(e.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));

    fetch("http://localhost:8000/customers?admin=true", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formDataObj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setIsFormSuccessful(true);
        setShowError(false);
      })
      .catch((res) => {
        console.log(res);
        setIsLoading(false);
        setIsFormSuccessful(false);
        setShowError(true);
      });
  };
  useEffect(() => {
    document.querySelectorAll(".addClass").forEach((elem) => {
      elem.classList.add("active");
    });
  }, []);
  return (
    <Container className="App">
      <Banner className="addClass">
        <H1R>Hello World</H1R>
      </Banner>
      <SignupForm className="addClass">
        <div>
          <H1>Créer un nouveau compte</H1>
          {!isFormSuccessful ? (
            <Form onSubmit={(e) => handleForm(e)}>
              <Input>
                <span className="material-symbols-outlined material-icons">
                  badge
                </span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nom"
                  required
                ></input>
              </Input>
              <Input>
                <span className="material-symbols-outlined material-icons">
                  military_tech
                </span>
                <input
                  type="number"
                  name="age"
                  placeholder="Âge"
                  required
                ></input>
              </Input>
              <Input>
                <span className="material-symbols-outlined material-icons">
                  home
                </span>
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  required
                ></input>
              </Input>
              <div>
                <input type="checkbox" required></input>
                <small> I read and agree to Terms & Conditions</small>
              </div>
              {!isLoading ? (
                <Button type="submit">S'inscrire</Button>
              ) : (
                <Button type="submit" disabled>
                  <img src={spinner} className="loading" alt="loading"></img>
                </Button>
              )}
              {showError && (
                <small>Une erreur s’est produite lors de l'inscription.</small>
              )}
            </Form>
          ) : (
            <small>Inscription réussie.</small>
          )}
        </div>
      </SignupForm>
    </Container>
  );
}
