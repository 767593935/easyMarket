import React, { Component } from 'react';
//引入样式
import './Msite.less';
import { Carousel, WingBlank } from 'antd-mobile';

class Msite extends Component {
  state = {
    data: ['1', '2', '3'],
    data2: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg', 'http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg', 'http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg'],
        data2: ['https://yanxuan.nosdn.127.net/14943267735961674.jpg', 'https://yanxuan.nosdn.127.net/14942996754171334.jpg', 'https://yanxuan.nosdn.127.net/14942996754171334.jpg']
      });
    }, 100);
  }

  //点击跳转至分类页面
  goto=(e)=>{
    e.preventDefault()
    this.props.history.replace('/categroys')
  }

  render () {
    return (
      <div>
        {/* 轮播图部分 */}
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map((val, index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        {/* 导航按钮部分 */}
        <ul className='navTop'>
          <li onClick={(e)=>{this.goto(e)}}>
            <a href="###" >
              <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" />
              <div>居家</div>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png" alt="" />
              <div>餐厨</div>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png" alt="" />
              <div>配件</div>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png" alt="" />
              <div>服饰</div>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png" alt="" />
              志趣
           </a>
          </li>
        </ul>
        <div className='pinPai'>
          品牌制造商提供
        </div>
        <ul className='brand'>
          <li>
            <div>
              <p>CK制造商</p>
              <p>39元起</p>
            </div>
            <img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt="" />
          </li>
          <li>
            <div>
              <p>MUJI制造商</p>
              <p>12.9元起</p>
            </div>
            <img src="http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg" alt="" />
          </li>
          <li>
            <div>
              <p>WMF制造商</p>
              <p>9.9元起</p>
            </div>
            <img src="http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg" alt="" />
          </li>
          <li>
            <div>
              <p>Coach制造商</p>
              <p>49元起</p>
            </div>
            <img src="http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg" alt="" />
          </li>
        </ul>
        {/* 新品首发 */}
        <div className='newProduct'>
          <p className='newTitle'>新品首发</p>
          <ul className='newProducts'>
            <li>
              <img src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="" />
              <p>蔓越莓曲奇200g</p>
              <span>$36</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/6c03ca93d8fe404faa266ea86f3f1e43.png" alt="" />
              <p>趣味粉彩系列笔记本</p>
              <span>$36</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png" alt="" />
              <p>简约知性记忆棉坐垫</p>
              <span>$36</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/8b30eeb17c831eba08b97bdcb4c46a8e.png" alt="" />
              <p>趣味粉彩系列记忆棉坐垫</p>
              <span>$36</span>
            </li>
          </ul>
        </div>
        {/* 人气推荐 */}
        <div className='recommend'>
          <div className='recommendTitle'>
            人气推荐
            </div>
          <ul className='recommends'>
            <li>
              <img src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="" />
              <div>
                <p>双宫茧桑蚕丝被 空调被</p>
                <p>一级桑蚕丝，吸湿透气柔软</p>
                <p>￥699</p>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/a196b367f23ccfd8205b6da647c62b84.png" alt="" />
              <div>
                <p>可水洗舒柔丝羽绒枕</p>
                <p>超细纤维，蓬松轻盈回弹</p>
                <p>￥666</p>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png" alt="" />
              <div>
                <p>双宫茧桑蚕丝被 空调被</p>
                <p>一级桑蚕丝，吸湿透气柔软</p>
                <p>￥699</p>
              </div>
            </li>
          </ul>
        </div>
        {/* 专题精选 */}
        <div className='selection'>
          <div className='selectionTitle'>
            专题精选
          </div>
          <WingBlank>
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data2.map((val, index) => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        {/* 类别名称部分 */}
        <div className='categoryBox'>
          <div className='categoryName'>
            居家
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
              </div>
              <div className='goodsItemName'>
                日式和风懒人沙发
              </div>
              <div className='goodsItemPrice'>
                ￥66
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/819fdf1f635a694166bcfdd426416e8c.png" alt="" />
              </div>
              <div className='goodsItemName'>
                升级款记忆绵护椎腰靠
              </div>
              <div className='goodsItemPrice'>
                ￥66
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多居家好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            餐厨
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多餐厨好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            饮食
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多饮食好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            配件
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多配件好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            服装
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多服装好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            婴童
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多婴童好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            杂货
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多杂货好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            洗护
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多洗护好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>
          <div className='categoryName'>
            志趣
          </div>
          <div className='cateGoryGoodsWrap'>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 全家系列
              </div>
              <div className='goodsItemPrice'>
                ￥398
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png" alt="" />
              </div>
              <div className='goodsItemName'>
                典雅美式全棉刺绣抱枕
              </div>
              <div className='goodsItemPrice'>
                ￥59
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅
              </div>
              <div className='goodsItemPrice'>
                ￥268
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/4d3d3eaeb872860539d7faa59f9f84e9.png" alt="" />
              </div>
              <div className='goodsItemName'>
                100年传世珐琅锅 马卡龙系列
              </div>
              <div className='goodsItemPrice'>
                ￥359
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥180
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                Carat钻石炒锅30cm
              </div>
              <div className='goodsItemPrice'>
                ￥169
              </div>
            </a>
            <a href="#/goods/1009024">
              <div className='goodsItemImg'>
                <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png" alt="" />
              </div>
              <div className='goodsItemName'>
                160*230羊毛手工地毯
              </div>
              <div className='goodsItemPrice'>
                ￥969
              </div>
            </a>
            <a href="#/categorys/1000500" className='categoryMoreGoods'>
              <div>
                更多志趣好物
              </div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more" />
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Msite;