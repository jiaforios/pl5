import React, { useEffect, useState } from 'react'
import { get } from '../../../service/api'
import { message, Spin, List } from 'antd'
import './css/history.css'
const History = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    _fetchData()
  }, [])

  const _fetchData = () => {
    const params = {
      gameNo: 350133,
      provinceId: 0,
      pageSize: 30,
      isVerify: 1,
      pageNoL: 1,
      termLimits: 30,
    }
    setLoading(true)
    get('/gateway/lottery/getHistoryPageListV1.qry', params)
      .then((response) => {
        setLoading(false)
        // 处理响应数据
        if (response.success) {
          message.success('请求成功')
          setData(response.value.list)
        } else {
          message.error(`请求出错${response.errorMessage}`)
        }
      })
      .catch((error) => {
        // 处理错误
      })
  }
  return (
    <div
      className="list"
      style={{
        height: `${windowHeight - 40}px`,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <div className="cell">
              <p>{item.lotteryDrawResult}</p>
            </div>
          </List.Item>
        )}
      />
      <Spin spinning={loading} size="large" />
    </div>
  )
}

export default History
