
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setAuth } from './src/public/actions/userActions';
import { store } from './src/store';


const App = () => {
  const isLogin = useSelector(state => state).user.loggedIn
  return isLogin ? <DashBoard /> : <Login />
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validUser = useSelector(state => state).user.validUser;
  const dispatch = useDispatch();
  const validate = () => {
    if (email === validUser.username && password === validUser.password) {
      dispatch(setAuth(true))
    } else {
      alert("Error")
    }
  }
  return <View style={styles.login}>
    <Text selectable style={styles.hint}>hruday@gmail.com{' '}hruday123</Text>
    <TextInput
      onChangeText={setEmail}
      placeholder={'Email'}
      style={styles.input}
    />
    <TextInput
      onChangeText={setPassword}
      placeholder={'Password'}
      secureTextEntry={true}
      style={styles.input}
    />
    <Button
      title={'Login'}
      style={styles.input}
      onPress={validate}
    />
  </View>
}


const DashBoard = () => {
  const rowData = ["Id", "Name", "Age", "Gender", "Email", "Phone No."]
  let users = useSelector(state => state).user.users;
  let userArray = users.map(u => [u.id, u.name, u.age, u.gender, u.email, u.phoneNo])

  return (
    <View style={styles.dashboardMain}>
      <Text style={styles.dashHeading}>DashBoard of Employees.</Text>
      <ScrollView>
        <View style={styles.container}>
          <Table borderStyle={styles.table}>
            <Row data={rowData} style={styles.head} textStyle={styles.text} />
            <Rows data={userArray} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  dashboardMain: { flex: 1, paddingTop: 50 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 4 },
  hint: { fontSize: 12, color: '#0006', padding: 5 },
  table: { borderWidth: 2, borderColor: '#c8e1ff' },
  dashHeading: { textAlign: 'center', paddingTop: 20, fontWeight: 'bold', fontSize: 18 }
});


const Main = () => {
  return <Provider store={store}>
    <App />
  </Provider>
}
export default Main;