import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Snipper from "./Snipper";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("this is a constructor");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("render");
    this.fetchArticles();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.pageSize !== this.props.pageSize ||
      prevProps.category !== this.props.category ||
      prevState.page !== this.state.page
    ) {
      this.fetchArticles();
    }
  }

  async fetchArticles() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
   
    let url = `https://newszill-backend.onrender.com/api/news?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}`;
    this.setState({ loading: true });
  
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      this.setState({
        articles: data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }
  
  handlePrevious = () => {
    console.log("previous");
    this.setState((prevState) => ({ page: prevState.page - 1 }));
  };

  handleNext = () => {
    console.log("next");
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsZilla- Top Headlines</h1>
        {this.state.loading && <Snipper />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevious}
            className="btn btn-sm btn-dark"
          >
            &larr; Previos
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            onClick={this.handleNext}
            className="btn btn-sm btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
