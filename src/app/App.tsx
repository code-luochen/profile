'use client'
import React, { useEffect, useState } from 'react'
import { GithubOutlined, StarOutlined, ForkOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Card, Typography, Divider, Row, Col, Spin, Modal } from 'antd'
import './App.scss'
import Image from 'next/image'
import { useRequest } from 'ahooks'
import useTurnLink from './_hooks/turnLink'
import { FEATURES, TOPICS } from './_utils/const'
import { useRouter } from 'next/navigation'

const { Title, Text, Paragraph } = Typography

const App = () => {
  const onTurnLink = useTurnLink()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const router = useRouter()

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/juejin', {
        method: 'POST',
        body: JSON.stringify({
          params: {
            user_id: '3221995757249127',
            sort_type: 2,
            cursor: '0',
            type: 'new',
          },
        }),
      })

      const data = await response.json()

      if (data.err_no === 0) {
        return data?.data
      }

      return []
    } catch (error) {
      console.error('获取文章失败:', error)
      return []
    }
  }

  const {
    run: fetchArticlesRun,
    data,
    loading,
  } = useRequest(fetchArticles, {
    manual: true,
  })

  useEffect(() => {
    fetchArticlesRun()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="github-homepage">
      {/* 导航栏 */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* 头部 logo */}
            <div className="logo">
              <Image
                src="/avatar.png"
                alt="logo"
                width={40}
                height={40}
                style={{ borderRadius: '50%', marginRight: '8px' }}
              />

              <span className="logo-text">xiaoman</span>
            </div>

            <nav className="nav-links">
              {TOPICS.map((item) => (
                <a href="#" key={item.title}>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="main-content">
        {/* 英雄区域 */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <Title level={1} className="hero-title">
                不知道命运是什么， 才知道什么是命运
              </Title>
              <Paragraph className="hero-description">
                要是你从童年的位置看未来，你会说你前途未卜，你会说你前途无量，
                但要是你从站在终点看你的生命轨迹，你看到的只有一条路，你就只能看到一条命定之路
              </Paragraph>
            </div>

            <div className="hero-image">
              <Image src="/tuling.webp" alt="开发者协作" className="hero-img" width={550} height={400} />
            </div>
          </div>
        </section>

        {/* 特性展示 */}
        <section className="features-section">
          <div className="container">
            <Title level={2} className="section-title">
              你可以了解到什么？
            </Title>
            <Row gutter={[32, 32]} className="features-grid">
              {FEATURES.map((feature, index) => (
                <Col
                  xs={24}
                  sm={12}
                  md={6}
                  key={feature.key}
                  onClick={() => {
                    if (feature.key === 'store') {
                      setIsModalVisible(true)
                    } else if (feature.key === 'daily') {
                      router.push('/daily')
                    } else {
                      onTurnLink(feature.link)
                    }
                  }}
                >
                  <Card className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <Title level={4} className="feature-title">
                      {feature.title}
                    </Title>
                    <Paragraph className="feature-description">{feature.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* 热门仓库 */}
        <section className="repositories-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                个人博客
              </Title>
              <Button type="link" className="view-all-btn" onClick={() => setIsModalVisible(true)}>
                查看更多
              </Button>
            </div>
            <Spin spinning={loading}>
              <Row gutter={[24, 24]} className="repositories-grid">
                {data?.slice(0, 4)?.map((repo) => (
                  <Col
                    xs={24}
                    md={12}
                    lg={6}
                    key={repo.article_id}
                    onClick={() => onTurnLink(`https://juejin.cn/post/${repo.article_info?.article_id}`)}
                  >
                    <Card className="repo-card">
                      <div className="repo-header">
                        <Title level={4} className="repo-name">
                          {repo.article_info?.title}
                        </Title>
                      </div>
                      <Paragraph className="repo-description">{repo.article_info?.brief_content}</Paragraph>
                      <div className="repo-stats">
                        <span className="repo-language">{repo.category?.category_name}</span>
                        <span className="repo-stat">
                          <StarOutlined /> {repo.article_info?.collect_count}
                        </span>
                        <span className="repo-stat">
                          <ForkOutlined /> {repo.article_info?.read_time}
                        </span>
                        <span className="repo-stat">
                          <EyeOutlined /> {repo.article_info?.view_count}
                        </span>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Spin>
          </div>
        </section>

        {/* 开源项目 */}
        <section className="opensource-section">
          <div className="container">
            <div className="opensource-content">
              <div className="opensource-text">
                <Title level={2} className="section-title">
                  GitHub 上的开源项目
                </Title>
                <Paragraph className="opensource-description">
                  GitHub 是开源项目的家园。为开源社区提供免费的公共托管， 目前在思考开源计划。
                </Paragraph>
                <Button type="primary" className="opensource-button" disabled>
                  敬请期待
                </Button>
              </div>
              <div className="opensource-image">
                <Image src="/open.webp" alt="开源项目" className="opensource-img" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {TOPICS.map((item) => (
              <div className="footer-section" key={item.title}>
                <Title level={4}>{item.title}</Title>
                <ul>
                  {item.items.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Divider className="footer-divider" />

          <div className="footer-bottom">
            <div className="footer-logo">
              <GithubOutlined className="github-icon" />
              <span className="logo-text">GitHub</span>
            </div>
            <Text className="copyright">© 2025 luochun. All rights reserved.</Text>
          </div>
        </div>
      </footer>

      <Modal open={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
        <main>
          <section>稀土掘金</section>
          <section>CSDN</section>
        </main>
      </Modal>
    </div>
  )
}

export default App
