import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(

   <App />,

  document.getElementById('root')
);








/* how it should look
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>
*/