import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center" > <font size="5"> Похоже вы еще не создавали ссылки.</font><br/>
        <font size="4">Это можно исправить <Link to={`/create`}>тут</Link>! </font></p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Оригинальная</th>
        <th>Сокращенная</th>
        <th>Кол-во переходов</th>
        <th>Дата создания</th>
        <th>Открыть</th>

      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>{link.clicks}</td>
            <td>{new Date(link.date).toLocaleDateString()}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Открыть</Link>
            </td>

          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}
