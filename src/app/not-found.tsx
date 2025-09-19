'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Result, Button, Row, Col, Space, Typography, Divider } from 'antd'
import { HomeOutlined, ArrowLeftOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

export default function Custom404() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  // 倒计时功能，10秒后自动返回首页
  useEffect(() => {
    if (countdown === 0) {
      router.push('/')
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return (
    <main>
      <Row justify="center" align="middle" style={{ minHeight: '90vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Result
            status="404"
            title="404"
            subTitle="抱歉，您访问的页面不存在"
            extra={
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Paragraph type="secondary">
                  <Text>将在 </Text>
                  <Text strong style={{ color: '#1890ff' }}>
                    {countdown}
                  </Text>
                  <Text> 秒后自动返回首页</Text>
                </Paragraph>

                <Divider />

                <Space wrap>
                  <Button type="primary" icon={<HomeOutlined />} onClick={() => router.push('/')} size="large">
                    返回首页
                  </Button>
                  <Button icon={<ArrowLeftOutlined />} onClick={() => router.back()} size="large">
                    返回上一页
                  </Button>
                </Space>
              </Space>
            }
          />

          <Divider />

          <Title level={4}>可能的原因：</Title>
          <ul style={{ color: 'rgba(0, 0, 0, 0.45)', paddingLeft: '20px' }}>
            <li>网址输入错误</li>
            <li>页面已被移除或暂时不可用</li>
            <li>资源已被删除</li>
          </ul>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Button type="dashed" icon={<RocketOutlined />} onClick={() => router.push('/')} size="large">
              探索其他内容
            </Button>
          </div>
        </Col>
      </Row>
    </main>
  )
}
