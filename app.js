const data = {
  nodes: [
    { id: 'home', title: 'About Me', type: 'root' },
    { id: 'projects', title: 'Personal Projects', type: 'link'},
    { id: 'contact', title: 'Contact' , type: 'link'}
  ],
  links: [
    { source: 'node1', target: 'node2' },
    { source: 'node1', target: 'node3' }
  ]
};

const Graph = ForceGraph()(document.getElementById('graph-container'))
  .graphData(data)
  .nodeLabel('name')
  .backgroundColor('#101020')
  .nodeRelSize(12)
  .nodeAutoColorBy('type')
  .onNodeClick(node => {
    loadNodeDetails(node.id);
  });

function loadNodeDetails(nodeId) {
  const panel = document.getElementById('detail-panel');
  panel.innerHTML = `<p>Loading details for <strong>${nodeId}</strong>…</p>`;
  fetch(`pages/${encodeURIComponent(nodeId)}.html`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => panel.innerHTML = html)
    .catch(err => {
      panel.innerHTML = `<p style="color: #e63946;">Error loading content: ${err.message}</p>`;
    });
}

