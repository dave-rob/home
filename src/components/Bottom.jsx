export default function Bottom(){
    return (
        <section className="section" id="contact">
        <div>
            <h1 className="contact">Lets get in touch!</h1>
            <p className="contact">lets do it</p>
        </div>
            <div className="contact-form">
            <div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">From</label>
  </div>
  <div className="field-body">
    <div className="field">
      <p className="control is-expanded has-icons-left">
        <input className="input" type="text" placeholder="Name" />
        <span className="icon is-small is-left">
          <i className="fa-solid fa-user"></i>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email"/>
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label"></div>
  <div className="field-body">
    <div className="field is-expanded">
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static">
            +1
          </a>
        </p>
        <p className="control is-expanded">
          <input className="input" type="tel" placeholder="Your phone number" />
        </p>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label">
    <label className="label">Subject</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <input className="input" type="text" placeholder="e.g. Partnership opportunity" ></input>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">Question</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <textarea className="textarea" placeholder="Explain how I can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label">
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <button className="button is-danger">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
</div>
<footer className="footer">
    <div className="content has-text-centered">
    </div>
</footer>
        </section>
    )

    
}