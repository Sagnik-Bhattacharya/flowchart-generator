export function generateSVG(nodes, edges, width = 800, height = 600) {
  const svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`;
  const svgFooter = `</svg>`;

  const nodeElements = nodes
    .map((node) => {
      const { id, position, data, style = {} } = node;
      const x = position.x;
      const y = position.y;
      const width = style.width || 100;
      const height = style.height || 50;
      const rx = style.borderRadius === '50%' ? width / 2 : 0;
      const rotation = style.transform === 'rotate(45deg)' ? 45 : 0;
      const color = style.backgroundColor || '#ffffff';
      const stroke = style.border || '1px solid #000000';

      return `
        <g transform="translate(${x},${y}) rotate(${rotation})">
          <rect width="${width}" height="${height}" rx="${rx}" ry="${rx}" fill="${color}" stroke="${stroke}" />
          <text x="${width / 2}" y="${height / 2}" dominant-baseline="middle" text-anchor="middle" font-size="14" fill="black">${data.label}</text>
        </g>
      `;
    })
    .join('');

  const edgeElements = edges
    .map((edge) => {
      const sourceNode = nodes.find((n) => n.id === edge.source);
      const targetNode = nodes.find((n) => n.id === edge.target);
      if (!sourceNode || !targetNode) return '';

      const x1 = sourceNode.position.x + (sourceNode.style?.width || 100) / 2;
      const y1 = sourceNode.position.y + (sourceNode.style?.height || 50) / 2;
      const x2 = targetNode.position.x + (targetNode.style?.width || 100) / 2;
      const y2 = targetNode.position.y + (targetNode.style?.height || 50) / 2;

      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="2" marker-end="url(#arrow)" />`;
    })
    .join('');

  const markerDefs = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
      </marker>
    </defs>
  `;

  return `${svgHeader}${markerDefs}${edgeElements}${nodeElements}${svgFooter}`;
}
