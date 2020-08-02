import React from 'react'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            // * Типа API
            data : {
            emailUser: 'Keegan46@gmail.com',
            firstNameUser: 'Casper',
            secondNameUser: 'Stiedemann',
            avatarUser: 'https://s3.amazonaws.com/uifaces/faces/twitter/zvchkelly/128.jpg',
            projectLastUser: 'Borders alliance Principal',
            descriprionUser: 'Distinctio qui id voluptate veniam consectetur aut voluptatum labore aliquam. Officiis cum est molestiae. Voluptas cupiditate consequatur repellendus. Magni aut expedita tempore. Error saepe molestiae ea impedit vel consequatur. Laudantium velit doloremque ipsum impedit minus eos.',
            bornUser: '14.06.1996',
            jobUser: 'Murphy Group',
            statusUser: 'Admin',
            clickBackStatus: false,
        }}
        this.TestCheckProfile = this.TestCheckProfile.bind(this);
    }

    componentDidMount() {
        const { data } = this.state;
        console.log(data);
    }

    TestCheckProfile() {
        this.setState({
            clickBackStatus: true,
        })
        
    }

    render() {
        const { data,  } = this.state;
        return (
            <React.Fragment>
                <h1>Ваш профиль</h1>
                <div>
                    <div><img src={data.avatarUser} alt="Фотография профиля"/></div>
                    <div>
                        <h3>{data.firstNameUser} {data.secondNameUser}</h3>
                        <h3>{data.statusUser}</h3>
                        <p><a href="mailto:keegan46@gmail.com">{data.emailUser}</a></p>
                        <p>{data.bornUser}</p>
                        <p>{data.jobUser}</p>
                        <p>{data.projectLastUser}</p>
                        <p>{data.descriprionUser}</p>
                    </div>
                    <a href="#s" onClick={this.TestCheckProfile}>Главная </a>
                    <a href="#s">Новости</a>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfilePage;