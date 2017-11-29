import React from 'react';

class BtnNewUser extends React.Component {
    render() {
        return (
            <div className="field-btn-create">
                <button type="submit" onClick={this.props.a}>Добавить</button>
            </div>
        )
    }
}

export default BtnNewUser;