
class App extends React.Component {
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            // name: 'Ivan',
            // years: 25,
            userNameWorks: [],
            userNameWorks_edit: [],
            select_user: '',
            input_user: '',
            text_null_search: 'Все ок!!!!!!!!!!',
            text_null_search_input:  'text_null_search_input',
            text : '',
            classOption: '',
            classNameUser: 'classNameUser',


        }
    }
    worksState(event){
        let test = 'test'
        //this.serState({userNameWorks_edit:})
        //.then(response => {console.log(response)})  // convert to json
        // .then(response => response.json())  // convert to json


        // .catch(function (error) {
        //     console.log(error);
        // });
        //this.setState({down_up:name_click}) // отловили что было нажато и записано в стейте
        // console.log('2')

    }

    inputUser(event){
        //ловим данные из поля инпут
        //проверяем на пустоту
        console.log(event.target.value)

        this.setState({input_user:event.target.value})

        // console.log('1')
        // console.log(this.state.input_user)

    }

    selectUser(event){
        //ловим данные из поля option
        this.setState({select_user:event.target.value})

}

    optionUser(event) {
        // эта функция толкает на деф джанго гетом данные из инпута и селекта
        // alert('name_click')
        console.log('53')
        console.log(this.state.input_user)
        // let works_name = this.state.userNameWorks

        // this.setState({select_user:event.target.value})
        if (this.state.select_user.length == 0 || this.state.input_user == '') { // запрещаем ввод пустоты
            this.setState({classOption:'error'});
            // this.setState({classNameUser:'error'});
            this.setState({text_null_search: 'Должность не выбрана'}) // записываем в значение что поле пустоеd

            // alert('Введите данные добаволения')

        }
        if (this.state.input_user.length == 0 || this.state.input_user == '') { // запрещаем ввод пустоты
            this.setState({classNameUser:'error'});
            // this.setState({classNameUser:'error'});
            this.setState({text_null_search_input: 'Поле ввода пустое'}) // записываем в значение что поле пустое

            // alert('Введите данные добаволения')
        }
        else {
            this.setState({classOption:'success'});
            this.setState({classNameUser:'success'});

        console.log('qwety')
        console.log(this.state.input_user)
        let selectuser = this.state.select_user
        let inputuser = this.state.input_user


        fetch('/secondfetch/?selectuser=' + selectuser + '&inputuser=' + inputuser)
            // fetch('secondfetch?select_user=' + test )
            // Handle success
            .then(response => response.text())  // из класса SecondDefFetch получаем тесктом все из шаблона second_new.html
            .then(text_secondfetch => document.getElementsByTagName('body')[0].innerHTML = text_secondfetch) // из переменой data в которой находятся полученные данные записываем в body
        }
    }


    worksApi(json) { // для выпадающего списка datauser
        this.setState({userNameWorks: json}) //

        //
        // console.log('userNameWorks')
        // console.log(this.state.userNameWorks, this.state.userNameWorks_edit)
    }
    worksApiAll(json) { //

        this.setState({userNameWorks_edit: json})
        //
        // console.log('userNameWorks')
        // console.log(this.state.userNameWorks, this.state.userNameWorks_edit)
    }
    componentDidMount() {
        // console.log('hello_comp-2')

        // GET Request.
        fetch('/secondapi/')
            // получаем данные из  SecondWorksListView  для option
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => this.worksApi(json))    //print data to console

        // GET Request.
        fetch('/secondapiall/')
            // получаем данные из SecondWorksListAllView для прорисовки
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => this.worksApiAll(json))    //print data to console


        // fetch()
        //.then(json => this.setState({products:json}))    //print data to console

        // .then(my_categ_state => console.log(this.state.category))
        // console.log('2')
        // console.log(this.state)
    }

    /*<!-- выведем даные из сайта: -->*/
    render() {
        const list = this.state.userNameWorks_edit.map((item, index) => {

            let usernames = item.username
            let datausers = item.datauser
            // let id = item.id
            // let datausers = item.datauser
            return <div className='children_1'>
                    <ul>
                        {/*<li key={index}>id : {item.id}</li>*/}
                        <li key={index}>Имя : {usernames}</li>
                        <li>Должность: {datausers}</li>
                    </ul>
                    </div>
            // <li>Имя : {item.datauser}</li>
        });

        const list2 = this.state.userNameWorks.map((item, index) => { //<!--сделали для подстановки значения по умоллчанию <option >Выберете</option>-->
            let datausers = item.datauser
            return <option className={this.state.classOption} key={index} value={datausers}>{datausers}</option>
            // <li>Имя : {item.datauser}</li>
        });

        //  render зарезервированное имя в реакте выводит даные

            return  <div className="parent">
                <div>{list}</div>
                    <form className='formClass'>
                            <select  className={this.state.classOption} onChange={this.selectUser.bind(this)} id='chek_select'>
                                <option value='0'>Выберете</option>
                                {list2}
                            </select>
                            <input className={this.state.classNameUser} placeholder='Ввести Имя' onChange={this.inputUser.bind(this)} type="text"/>

                            <button onClick={this.optionUser.bind(this)} type='button'>Добавить</button> {/*render зарезервированное имя в реакте выводит даные*/}

                    </form>
                <div className="text_null_search">{this.state.text_null_search}</div>
                <div className="text_null_search_input">{this.state.text_null_search_input}</div>
                    </div>;


    }
}
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
