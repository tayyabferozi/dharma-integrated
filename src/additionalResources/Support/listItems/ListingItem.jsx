import React, { Component } from "react";
import "./ListingItem.css";
import { AiOutlinePlus } from "react-icons/ai";

export default class FAQListingItem extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <div className="faq_item">
        <a
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
          className="btn btn-link btn_faq btn-block"
          data-toggle="collapse"
          href={`#${this.props.collection}${this.props.id}`}
        >
          <span>{this.props.title}</span>
          <AiOutlinePlus
            className={this.state.open ? "faq_icon rotate" : "faq_icon"}
          />
        </a>
        <div className="collapse" id={`${this.props.collection}${this.props.id}`}>
          <div className="faq_drop">{this.props.body}</div>
        </div>
      </div>
    );
  }
}
