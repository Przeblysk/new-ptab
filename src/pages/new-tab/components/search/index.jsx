import React, { useState, useEffect } from 'react'
import Styles from './index.module.scss'

const Search = () => {
  const infos = [
    {
      name: 'word',
      placeholder: '百度一下，你就知道',
      action: 'https://www.baidu.com/s',
    },
    {
      name: 'q',
      placeholder: 'Google 搜索',
      action: 'https://www.google.com/search',
    },
    {
      name: 'q',
      placeholder: 'Bing 搜索',
      action: 'https://cn.bing.com/search',
    },
    {
      name: 'q',
      placeholder: 'Google 图片搜索',
      action: 'https://www.google.com/search',
    },
    {
      name: 'word',
      placeholder: '百度百科',
      action: 'https://baike.baidu.com/search',
    },
    {
      name: 'query',
      placeholder: '高德地图',
      action: 'https://ditu.amap.com/search',
    },
    {
      name: 'q',
      placeholder: '中英文文献检索',
      action: 'https://scholar.google.com/scholar',
    },
  ]

  const [index, setIndex] = useState(0)
  const [info, setInfo] = useState(infos[index])

  useEffect(() => {}, [])

  const handleClick = (e) => {
    const index = Number(e.target.getAttribute('data-index'))
    if (!index && index !== 0) {
      return
    }
    setIndex(index)
    setInfo(infos[index])
  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <ul className={Styles.bar} onClick={handleClick}>
          <li
            className={`${Styles.barItem} ${index === 0 && Styles.active}`}
            data-index={0}
          >
            百度
          </li>
          <li
            className={`${Styles.barItem} ${index === 1 && Styles.active}`}
            data-index={1}
          >
            谷歌
          </li>
          <li
            className={`${Styles.barItem} ${index === 2 && Styles.active}`}
            data-index={2}
          >
            必应
          </li>
          <li
            className={`${Styles.barItem} ${index === 3 && Styles.active}`}
            data-index={3}
          >
            图片
          </li>
          <li
            className={`${Styles.barItem} ${index === 4 && Styles.active}`}
            data-index={4}
          >
            百科
          </li>
          <li
            className={`${Styles.barItem} ${index === 5 && Styles.active}`}
            data-index={5}
          >
            地图
          </li>
          <li
            className={`${Styles.barItem} ${index === 6 && Styles.active}`}
            data-index={6}
          >
            学术
          </li>
        </ul>
        <form
          className={Styles.searchForm}
          target='_blank'
          action={info.action}
        >
          {index === 3 && <input type='hidden' name='tbm' value='isch' />}
          <input
            className={Styles.searchInput}
            type='search'
            autoComplete='off'
            autoFocus=''
            name={info.name}
            placeholder={info.placeholder}
          />
          <button className={Styles.searchBtn} type='submit'>
            搜索
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
