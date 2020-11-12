import React from 'react';
import {Formik} from 'formik';
import './dashboard.css';
import * as Yup from 'yup';
import {actions} from './actions';
import {connect} from 'react-redux';


class DashboardComponent extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{name: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.loadRepoData(values.name);
                        setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Required')
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name"><b>GitHub Repo</b></label>
                                <input
                                    id="name"
                                    placeholder="Repo Name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name ? 'error' : ''}
                                />
                                {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>}
                                <button
                                    type="button"
                                    className="outline"
                                    onClick={() => { 
                                        this.props.resetRepoData()
                                        handleReset()
                                    }}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </button>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        );
                    }}
                </Formik>
                <div className="output">
                    {console.log(this.props.repositories.repo)}
                {this.props.repositories.repo && this.props.repositories.repo.items.map(repo => {
                    return (
                        <a href={repo.html_url} target="_blank">
                            {repo.full_name}
                        </a>
                    )
                })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRepoData: name => dispatch(actions.loadRepoData(name)),
        resetRepoData: () => dispatch(actions.resetRepoData())
    };
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

