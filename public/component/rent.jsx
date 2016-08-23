import React, {Component} from 'react';
// import picture1 from "../images/goods/digital-single-lens-reflex-001.jpg";
// import Image2 from "../images/goods/digital-single-lens-reflex-002.jpg";
// import Image3 from "../images/goods/mountain-bike-cycling-001.jpg";
// import Image4 from "../images/goods/mountain-bike-cycling-002.jpg";
// import Tent1 from "../images/goods/tent-004.jpg";
// import Tent2 from "../images/goods/tent-005.jpg";
// import Tent3 from "../images/goods/tent-003.jpg";
// import Knapsack1 from "../images/goods/knapsack-001.jpg";

// import "../css/rent.css";
import request from 'superagent';

// export default class Products extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: []
//     };
//     // this.initData = this.initData.bind(this);
//   }
//
//   componentDidMount() {
//     request.post('/api/rent/init')
//       .end((err, data) => {
//         this.setState({
//           products: data.body
//         });
//         alert('post');
//       });
//   }
//
//   render() {
//     const productInformation = this.state.products.map(product =>
//       <tr key={product.id}>
//         {/*<td>{product.img}</td>*/}
//         <td>{product.name}</td>
//         <td>{product.price}</td>
//         <td>{product.unit}</td>
//         <td>{product.briefDescription}</td>
//         <td>
//           <button onClick>detail</button>
//         </td>
//       </tr>);
//
//     return <div>
//       <table>
//         <tbody>
//         {productInformation}
//         </tbody>
//       </table>
//     </div>
//   }
// }

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: ''
    };
  }

  componentDidMount() {
    request.post('/api/rent/init')
      .end((err, data) => {
        this.setState({
          products: data.body
        });
      });
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={(keyword) => this.setState({keyword: keyword})}/>
        <hr/>
        <SearchResult keyword={this.state.keyword} products={this.state.products}/>
      </div>
    )
  }
}


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.props.onSearch;
  }

  render() {
    return <form>
      <input type="text" placeholder="keyword" autoFocus="true"
             onChange={this.onKeywordChange.bind(this)}/>
    </form>
  }

  onKeywordChange(event) {
    let keyword = event.target.value;
    this.onSearch(keyword);
  }
}

class SearchResult extends React.Component {
  render() {
    const {keyword, products} = this.props;
    return <div>
      {
        products.filter(product => {
          return product.name.toLowerCase().includes(keyword.toLowerCase())
        })
          .map(i => <div>
            <tr>
              <td>{i.img}</td>
              <td>{i.name}</td>
              <td>{i.price}</td>
              <td>{i.unit}</td>
              <td>{i.briefDescription}</td>
              <td>
                <button onClick>detail</button>
              </td>
            </tr>
          </div>)
      }
    </div>
  }
}







