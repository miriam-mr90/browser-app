import React, { Component } from 'react';

import GlobalStyles from './GlobalStyles.jsx';
import Header from './components/Header.jsx';
import DataTable from './components/DataTable.jsx';
import Pagination from './components/Pagination.jsx';
import Loader from './components/Loader.jsx';
import Filters from './components/Filters.jsx';

const DATA_SERVICE_URL = 'https://opentdb.com/api.php?amount=10';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            isFetching: false,
            data: [],
            displayfilters: false,
            dataDisplayed: [],
        };

        this.fetchDataWithFetchAPI = this.fetchDataWithFetchAPI.bind(this);
        this.toggleFiltersView = this.toggleFiltersView.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }

    componentDidMount() {
        this.fetchDataWithFetchAPI();
    }

    fetchDataWithFetchAPI = () => {
        this.setState({
            isFetching: true
        });

        fetch(DATA_SERVICE_URL)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result.results,
                    dataDisplayed: result.results,
                    isFetching: true
                })
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    isFetching: false
                });
            });
    };

    toggleFiltersView() {
        if(this.state.isFetching) {
            this.setState(prevState => ({
                displayfilters: !prevState.displayfilters
            }));
        }
    }

    filterResults(filterBy, value) {
        let displayedDataObj = this.state.data;

        if (value !== 'none') {
            displayedDataObj = displayedDataObj.filter(obj => obj[filterBy] === value );
        }

        this.setState({
            dataDisplayed: displayedDataObj
        });
    }


    render() {
        return (
          <>
              <GlobalStyles />
              <Header toggleFiltersView={this.toggleFiltersView}/>
              <div className='wrapper'>
                    <h1>Browse Questions</h1>
                    {this.state.displayfilters &&
                        <Filters
                            toggleFiltersView={this.toggleFiltersView}
                            filterResults={this.filterResults}/>}

                    {this.state.isFetching && this.state.data.length > 0 ?
                        <>
                            <DataTable {...this.state}/>
                            <Pagination />
                        </> : <Loader />}
              </div>
          </>
        );
    }
}

