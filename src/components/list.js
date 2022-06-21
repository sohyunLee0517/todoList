function List (props){
    const todoList = [];
    const openListView = () => {
        console.log('click');
    }

    for(let i = 0; i < props.list.length; i++){
        let list = props.list[i];
        todoList.push(
            <div key={list.sq} onClick={openListView}>
                <div className="todo-list-title">{list.title}</div>
                <div className="todo-list-date">{list.date}</div>
            </div>
        );
    }


    return(
        <main>
            {todoList}
        </main>
    )
}

export default List;