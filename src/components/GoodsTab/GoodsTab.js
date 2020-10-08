import React,{useState} from 'react'
import {Tabs,Tab} from 'react-bootstrap'

export default function GoodsTab(){
  const [key, setKey] = useState('over');
    return (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="over" title="Over">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper quis libero ut pharetra. Sed gravida maximus ipsum non ultrices. Morbi in posuere odio. Etiam molestie neque sed ipsum luctus iaculis. Proin eu mauris egestas, tristique nisi eu, imperdiet odio. Praesent vehicula hendrerit sapien non imperdiet. Nullam nec tortor quis felis convallis rutrum vitae sit amet neque. Sed eu ultrices leo. Sed tempor felis vitae mauris feugiat feugiat. Nullam convallis, lorem nec elementum hendrerit, massa orci eleifend nunc, ac rhoncus diam lorem et ante. Maecenas posuere elit quis diam feugiat sagittis. Nulla accumsan augue a congue sodales.</p>
          </Tab>
          <Tab eventKey="desc" title="Desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper quis libero ut pharetra. Sed gravida maximus ipsum non ultrices. Morbi in posuere odio. Etiam molestie neque sed ipsum luctus iaculis. Proin eu mauris egestas, tristique nisi eu, imperdiet odio. Praesent vehicula hendrerit sapien non imperdiet. Nullam nec tortor quis felis convallis rutrum vitae sit amet neque. Sed eu ultrices leo. Sed tempor felis vitae mauris feugiat feugiat. Nullam convallis, lorem nec elementum hendrerit, massa orci eleifend nunc, ac rhoncus diam lorem et ante. Maecenas posuere elit quis diam feugiat sagittis. Nulla accumsan augue a congue sodales.</p>
          </Tab>
          <Tab eventKey="photos" title="Photos">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper quis libero ut pharetra. Sed gravida maximus ipsum non ultrices. Morbi in posuere odio. Etiam molestie neque sed ipsum luctus iaculis. Proin eu mauris egestas, tristique nisi eu, imperdiet odio. Praesent vehicula hendrerit sapien non imperdiet. Nullam nec tortor quis felis convallis rutrum vitae sit amet neque. Sed eu ultrices leo. Sed tempor felis vitae mauris feugiat feugiat. Nullam convallis, lorem nec elementum hendrerit, massa orci eleifend nunc, ac rhoncus diam lorem et ante. Maecenas posuere elit quis diam feugiat sagittis. Nulla accumsan augue a congue sodales.</p>
          </Tab>
          <Tab eventKey="specs" title="Specs">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper quis libero ut pharetra. Sed gravida maximus ipsum non ultrices. Morbi in posuere odio. Etiam molestie neque sed ipsum luctus iaculis. Proin eu mauris egestas, tristique nisi eu, imperdiet odio. Praesent vehicula hendrerit sapien non imperdiet. Nullam nec tortor quis felis convallis rutrum vitae sit amet neque. Sed eu ultrices leo. Sed tempor felis vitae mauris feugiat feugiat. Nullam convallis, lorem nec elementum hendrerit, massa orci eleifend nunc, ac rhoncus diam lorem et ante. Maecenas posuere elit quis diam feugiat sagittis. Nulla accumsan augue a congue sodales.</p>
          </Tab>
        </Tabs>
      )
    }
    
