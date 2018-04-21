// patcurryworks.com-static/src/workouts/components/ExerciseList.js
import React, { Component } from 'react';
import axios from 'axios';

class ExerciseList extends Component {

    constructor() {
	super();
	this.state = {
	    exercises: []
	};
    }

    componentDidMount() {
	axios.get('/workouts/api/exercises/?format=json')
	    .then(res => {
		this.setState(() => {
		    return { exercises: res.data };
		});
	    });
    }

    render () {
	const exercises = this.state.exercises.map(e => {
	    return (
		<li key={e.title}>{e.title}</li>  
	    );
	});
	return (
	    <div>
	      <h1>Exercises</h1>
	      <ul>{ exercises }</ul>
	    </div>
	);
    }
}



export default ExerciseList;
