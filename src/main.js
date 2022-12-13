for(let i = 0; i < M; i++)
{
    for(let j = 0; j < N; j++)
    {
         
        if(grid[i][j] == 0)
            document.write(".")
        else
            document.write("*")
    }
    document.write("</br>")
}