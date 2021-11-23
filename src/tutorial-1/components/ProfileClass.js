import React from "react";

class ProfileClass extends React.Component {
  render() {
    return <div style={{ padding: 20, width: 250,  borderStyle: 'solid', borderWidth: 5, borderColor: "#E0E0E0", borderRadius: 10, fontSize: 16, fontFamily: 'arial' }}>
      <p style={{ marginTop: 0, marginRight: 0, marginBottom: 10, marginLeft: 0, fontSize: 20 }}>Привет, <b>{ this.props.name }!</b></p>
      <p style={{ margin: 0 }}>Дата регистрации: { this.props.registredAt.getDay() } { this.montoToStr(this.props.registredAt.getMonth()) } { this.props.registredAt.getFullYear() }</p>
    </div>
  }

  montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
      num - 1
        ];
  }
}

export default ProfileClass;