import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h2>Welcome to Pat's Salmon Cookies!</h2>
      <p>Check out our current sales: <Link to="/sales">Sales</Link></p>
        <p>Current Locations:</p>
        <li>
          <ul>Seattle, WA Hours: 6am - 7pm</ul>
          <ul>Tokyo, Japan Hours: 6am - 7pm</ul>
          <ul>Dubai, United Arab Emirates Hours: 6am - 7pm</ul>
          <ul>Paris, France Hours: 6am - 7pm</ul>
          <ul>Lima, Peru Hours: 6am - 7pm</ul>
        </li>
    </div>
  )
}

export default IndexPage
