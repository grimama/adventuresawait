import axios from 'axios';

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


//ACTION CREATORS
export function getStudents(students){
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student){
  const action = { type: ADD_STUDENT, student};
  return action;
}

export function dropStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

export function updateStudent(student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

//THUNK CREATORS
export function fetchStudents(){
  return function thunk(dispatch){
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      })
  }
}

export function postStudent(student, history){
  return function thunk(dispatch){
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        dispatch(addStudent(student))
      })
  }
}

export function deleteStudent(studentId, history) {

    return function thunk(dispatch) {
      return axios.delete(`/api/students/${studentId}`)
        .then(() => {
          const action = dropStudent(studentId);
          dispatch(action);
          history.push('/students')
        })
    }
  }

  export function reviseStudent(student) {
    return function thunk(dispatch) {
      return axios.put(`/api/students/${student.id}`, student)
        .then(res => res.data)
        .then(student => {
          dispatch(updateStudent(student));
        });
    }
  }


//REDUCER
export default function reducer (state = [], action){
  switch(action.type){
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      const newStudentArray = state.filter(student => student.id !== action.studentId);
      return newStudentArray;
    case UPDATE_STUDENT:
      const newStudentsArray = state.filter(student => action.student.id !== student.id);
      return [...newStudentsArray, action.student];
    default:
      return state
  }
}

