import React from "react";
import "./Styled/Contact.css";

// const url = "";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      comment: "",
      email: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Change Name in State
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  // Change surname in State
  onChangeSurname(e) {
    this.setState({ surname: e.target.value });
  }

  // Change comment in State
  onChangeComment(e) {
    this.setState({ comment: e.target.value });
  }

  // Change email in State
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  // Submit form (with method post for API)
  submitForm(e) {
    const { name } = this.state;
    e.preventDefault(e);
    alert(`Thank you for your message ${name}`);
  }

  render() {
    const { name, surname, comment, email } = this.state;

    return (
      <div className="FormContact">
        <h1>Nous contacter</h1>
        <form className="Form" onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="name">
                Nom
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChangeName}
                  defaultValue={name}
                />
              </label>
            </div>

            <div className="form-data">
              <label htmlFor="surname">
                Prénom
                <input
                  className="form-input"
                  type="text"
                  id="surname"
                  name="surname"
                  onChange={this.onChangeSurname}
                  defaultValue={surname}
                />
              </label>
            </div>

            <div className="form-data">
              <label htmlFor="email">
                Email
                <input
                  className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.onChangeTitle}
                  defaultValue={email}
                />
              </label>
            </div>

            <div className="form-data">
              <label htmlFor="comment">
                Message
                <input
                  className="form-input-large"
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChangeComment}
                  defaultValue={comment}
                />
              </label>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Contact;
