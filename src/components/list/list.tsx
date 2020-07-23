import * as React from 'react'
import './list.scss'
import { ListInterface } from './../../utils/todoInterfaces'
import { List, Button, Input, Checkbox } from 'antd';

const TodoList = (props: ListInterface) => {
  return (
    <div>
      <List
        className="list-body"
        itemLayout="horizontal"
        size="small"
        dataSource={props.listItems}
        renderItem={item => (
          <List.Item actions={[<Button onClick={() => props.handleRemove(item.id)} type="default" danger>Remove</Button>]}>
            <Checkbox className="list-checkbox" onChange={() => props.handleDone(item.id)} />
            <Input
              disabled={item.isDone}
              value={item.text}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleUpdate(event, item.id)}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList
