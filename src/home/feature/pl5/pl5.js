import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, Space, Spin, Button } from 'antd'
import { get } from '../../../service/api'
import './css/pl5.css'

const PL5 = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  const _fetchData = () => {
    const params = {
      gameNo: 350133,
      provinceId: 0,
      pageSize: 30,
      isVerify: 1,
      pageNoL: 1,
      termLimits: 10,
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
    <div className="body-in">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <p> 数据总量： {data.length}</p>
        <Button
          type="primary"
          onClick={() => {
            navigate('/pl5history')
          }}
        >
          查看历史
        </Button>
        <Button
          type="primary"
          onClick={() => {
            _fetchData()
          }}
        >
          加载数据
        </Button>
      </Space>
      <Spin spinning={loading} size="large" />
    </div>
  )
}

export default PL5
