(function () {
  function generateCertificate({ studentName, completedCount, totalCount }) {
    const jsPDF = window.jspdf?.jsPDF;
    if (!jsPDF) {
      alert('No se ha podido cargar la librería de PDF. Comprueba la conexión a internet e inténtalo de nuevo.');
      return;
    }

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    doc.setFillColor(245, 248, 255);
    doc.rect(0, 0, 297, 210, 'F');

    doc.setDrawColor(36, 88, 211);
    doc.setLineWidth(1.2);
    doc.roundedRect(12, 12, 273, 186, 6, 6, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(24, 58, 143);
    doc.setFontSize(14);
    doc.text('CERTIFICADO DE APROVECHAMIENTO', 148.5, 36, { align: 'center' });

    doc.setFontSize(28);
    doc.text('Tema 7 · Gestión de conflictos y reclamaciones', 148.5, 56, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.text('Se certifica que', 148.5, 80, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text(studentName, 148.5, 98, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(15);
    doc.text(
      `ha completado correctamente ${completedCount} de ${totalCount} fases de la web didáctica del Tema 7,`,
      148.5,
      118,
      { align: 'center' }
    );
    doc.text(
      'incluyendo prácticas aplicadas y pruebas tipo test con nivel de grado superior.',
      148.5,
      128,
      { align: 'center' }
    );

    const today = new Date();
    const dateText = today.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    doc.setFontSize(12);
    doc.text(`Fecha de emisión: ${dateText}`, 24, 170);
    doc.text('Modalidad: web interactiva con progreso persistente', 24, 180);

    doc.setDrawColor(160, 173, 194);
    doc.line(210, 168, 265, 168);
    doc.setTextColor(91, 100, 114);
    doc.text('Firma / validación docente', 237.5, 176, { align: 'center' });

    const safeName = studentName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .replace(/\s+/g, '_');

    doc.save(`certificado_tema7_${safeName || 'estudiante'}.pdf`);
  }

  window.Tema7Certificate = { generateCertificate };
})();
