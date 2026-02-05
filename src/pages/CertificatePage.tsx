import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Award, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getCourseBySlug } from "@/data/courses";
import { useProgress } from "@/contexts/ProgressContext";
import { useToast } from "@/hooks/use-toast";

// Número de WhatsApp de la academia (cambiar según necesites)
const WHATSAPP_NUMBER = "1234567890"; // Formato: código de país + número sin espacios ni símbolos

const CertificatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const course = getCourseBySlug(slug || "");
  const {
    isCourseComplete,
    userName,
    setUserName,
    earnCertificate,
    getCertificate
  } = useProgress();
  const [localName, setLocalName] = useState(userName);
  const [whatsappNumber, setWhatsappNumber] = useState(WHATSAPP_NUMBER);
  const [isWhatsappDialogOpen, setIsWhatsappDialogOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
          <Button asChild>
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const moduleIds = course.modules.map(m => m.id);
  const courseCompleted = isCourseComplete(course.id, moduleIds);
  const existingCertificate = getCertificate(course.id);

  if (!courseCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md text-center">
          <CardContent className="py-12">
            <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Certificado no disponible</h1>
            <p className="text-muted-foreground mb-6">
              Debes completar todos los módulos del curso para obtener tu certificado.
            </p>
            <Button asChild>
              <Link to={`/curso/${slug}`}>Continuar el curso</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleGenerateCertificate = () => {
    if (!localName.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Por favor ingresa tu nombre para el certificado.",
        variant: "destructive"
      });
      return;
    }

    setUserName(localName);
    earnCertificate(course.id, course.title);

    toast({
      title: "Certificado generado",
      description: "Tu certificado ha sido generado exitosamente.",
    });
  };

  const handleDownloadPDF = () => {
    const certificate = existingCertificate || {
      userName: localName,
      courseName: course.title,
      completionDate: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      certificateId: `CERT-${course.id.toUpperCase()}-${Date.now()}`
    };

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast({
        title: "Error",
        description: "No se pudo abrir la ventana de impresión. Permite las ventanas emergentes.",
        variant: "destructive"
      });
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificado - ${course.title}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @page {
            size: A4 landscape;
            margin: 0;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: white;
          }

          .certificate {
            width: 297mm;
            height: 210mm;
            padding: 15mm;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
          }

          .certificate::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }

          .inner {
            background: white;
            height: 100%;
            border-radius: 8px;
            padding: 25mm 35mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .border-design {
            position: absolute;
            top: 8mm;
            left: 8mm;
            right: 8mm;
            bottom: 8mm;
            border: 2px solid #667eea;
            border-radius: 4px;
            opacity: 0.3;
          }

          .corner-design {
            position: absolute;
            width: 30mm;
            height: 30mm;
            border: 3px solid #667eea;
            opacity: 0.2;
          }

          .corner-tl { top: 12mm; left: 12mm; border-right: none; border-bottom: none; }
          .corner-tr { top: 12mm; right: 12mm; border-left: none; border-bottom: none; }
          .corner-bl { bottom: 12mm; left: 12mm; border-right: none; border-top: none; }
          .corner-br { bottom: 12mm; right: 12mm; border-left: none; border-top: none; }

          .logo {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 8mm;
            letter-spacing: 2px;
          }

          .title {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 3mm;
            letter-spacing: 4px;
            text-transform: uppercase;
          }

          .subtitle {
            font-size: 14px;
            color: #666;
            margin-bottom: 12mm;
            text-transform: uppercase;
            letter-spacing: 4px;
          }

          .certify-text {
            font-size: 12px;
            color: #888;
            margin-bottom: 5mm;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .recipient {
            font-family: 'Playfair Display', serif;
            font-size: 42px;
            color: #667eea;
            margin-bottom: 8mm;
            font-weight: 700;
            font-style: italic;
          }

          .description {
            font-size: 14px;
            color: #555;
            line-height: 1.8;
            max-width: 450px;
            margin-bottom: 10mm;
          }

          .course-name {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12mm;
            padding: 8px 25px;
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
            border-radius: 25px;
            border: 1px solid #667eea30;
          }

          .footer {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 400px;
            margin-top: auto;
            padding-top: 10mm;
          }

          .footer-item {
            text-align: center;
          }

          .footer-item .line {
            width: 120px;
            height: 1px;
            background: #ccc;
            margin-bottom: 4px;
          }

          .footer-item .label {
            font-size: 9px;
            color: #999;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .footer-item .value {
            font-size: 11px;
            color: #555;
            margin-top: 2px;
            font-weight: 500;
          }

          .certificate-id {
            position: absolute;
            bottom: 12mm;
            right: 12mm;
            font-size: 8px;
            color: #bbb;
            letter-spacing: 1px;
          }

          .seal {
            position: absolute;
            bottom: 20mm;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            border: 2px solid #667eea;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #667eea;
            opacity: 0.5;
          }

          @media print {
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .certificate {
              margin: 0;
              box-shadow: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="inner">
            <div class="border-design"></div>
            <div class="corner-design corner-tl"></div>
            <div class="corner-design corner-tr"></div>
            <div class="corner-design corner-bl"></div>
            <div class="corner-design corner-br"></div>

            <div class="logo">ACADEMIA LOVIRTUAL</div>
            <h1 class="title">Certificado</h1>
            <p class="subtitle">de finalización</p>

            <p class="certify-text">Se certifica que</p>
            <p class="recipient">${certificate.userName}</p>

            <p class="description">
              Ha completado satisfactoriamente todos los módulos, actividades prácticas
              y evaluaciones del programa de formación:
            </p>

            <div class="course-name">${certificate.courseName}</div>

            <div class="footer">
              <div class="footer-item">
                <div class="line"></div>
                <div class="label">Fecha de emisión</div>
                <div class="value">${certificate.completionDate}</div>
              </div>
              <div class="footer-item">
                <div class="line"></div>
                <div class="label">Dirección Académica</div>
                <div class="value">Academia LoVirtual</div>
              </div>
            </div>

            <div class="certificate-id">ID: ${certificate.certificateId}</div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleSendWhatsApp = () => {
    const certificate = existingCertificate || {
      userName: localName,
      courseName: course.title,
      completionDate: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      certificateId: `CERT-${course.id.toUpperCase()}-${Date.now()}`
    };

    // Mensaje predeterminado
    const message = `🎓 *¡CURSO COMPLETADO!*

Hola, soy *${certificate.userName}* y acabo de completar exitosamente el curso:

📚 *${certificate.courseName}*

📅 Fecha de finalización: ${certificate.completionDate}
🏆 ID del certificado: ${certificate.certificateId}

He aprobado todos los módulos, sprints prácticos y exámenes del programa.

¡Gracias Academia LoVirtual por esta formación! 🚀

---
_Certificado generado por Academia LoVirtual_`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsWhatsappDialogOpen(false);

    toast({
      title: "WhatsApp abierto",
      description: "Se abrió WhatsApp con el mensaje del certificado. Descarga el PDF y adjúntalo al mensaje.",
    });
  };

  // Asegurar que el certificado siempre tenga el nombre del curso
  const certificate = existingCertificate ? {
    ...existingCertificate,
    courseName: existingCertificate.courseName || course.title
  } : (localName ? {
    userName: localName,
    courseName: course.title,
    completionDate: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    certificateId: `CERT-${course.id.toUpperCase()}-${Date.now()}`
  } : null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-gradient-to-r ${course.color} py-8 px-4`}>
        <div className="container max-w-5xl mx-auto">
          <Button
            variant="ghost"
            className="text-white mb-4 hover:bg-white/20"
            onClick={() => navigate(`/curso/${slug}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al curso
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <Award className="w-12 h-12 text-white" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Certificado de Finalización
              </h1>
              <p className="text-white/90">{course.title}</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-5xl mx-auto py-12 px-4">
        {!existingCertificate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="py-8">
                <div className="text-center mb-6">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-xl font-bold">Genera tu certificado</h2>
                  <p className="text-muted-foreground">
                    Ingresa tu nombre completo como deseas que aparezca en el certificado.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre completo"
                      value={localName}
                      onChange={(e) => setLocalName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${course.color}`}
                    onClick={handleGenerateCertificate}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Generar Certificado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Certificate Preview */}
            <div className="bg-gradient-to-br from-primary to-secondary p-6 md:p-8 rounded-2xl mb-8">
              <div className="bg-white rounded-xl p-6 md:p-10 text-center relative overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-3 md:inset-4 border-2 border-primary/20 rounded-lg pointer-events-none" />

                {/* Logo */}
                <div className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 tracking-wider">
                  ACADEMIA LOVIRTUAL
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-2 tracking-wider">
                  CERTIFICADO
                </h1>
                <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-8">
                  de finalización
                </p>

                {/* Certify text */}
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Se certifica que
                </p>

                {/* Recipient */}
                <p className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4 md:mb-6 italic">
                  {existingCertificate.userName}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4 md:mb-6">
                  Ha completado satisfactoriamente todos los módulos, actividades prácticas
                  y evaluaciones del programa de formación:
                </p>

                {/* Course Name */}
                <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full mb-6 md:mb-8 border border-primary/20">
                  <span className="text-base md:text-xl font-semibold text-foreground">
                    {existingCertificate.courseName || course.title}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex justify-center gap-8 md:gap-16 pt-6 md:pt-8 border-t">
                  <div className="text-center">
                    <div className="w-24 md:w-32 h-px bg-muted-foreground/30 mx-auto mb-2" />
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">Fecha de emisión</p>
                    <p className="text-xs md:text-sm font-medium">{existingCertificate.completionDate}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 md:w-32 h-px bg-muted-foreground/30 mx-auto mb-2" />
                    <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">Dirección Académica</p>
                    <p className="text-xs md:text-sm font-medium">Academia LoVirtual</p>
                  </div>
                </div>

                {/* Certificate ID */}
                <p className="absolute bottom-3 right-3 text-[10px] text-muted-foreground">
                  ID: {existingCertificate.certificateId}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={handleDownloadPDF}
                className={`bg-gradient-to-r ${course.color}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar PDF
              </Button>

              <Dialog open={isWhatsappDialogOpen} onOpenChange={setIsWhatsappDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      Enviar certificado por WhatsApp
                    </DialogTitle>
                    <DialogDescription>
                      Se abrirá WhatsApp con un mensaje predeterminado informando que completaste el curso.
                      Recuerda descargar el PDF y adjuntarlo al mensaje.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 py-4">
                    <div>
                      <Label htmlFor="whatsapp">Número de WhatsApp (con código de país)</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <Input
                          id="whatsapp"
                          placeholder="Ej: 521234567890"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Ejemplo: 52 para México, 1 para USA, 34 para España
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Vista previa del mensaje:</p>
                      <div className="text-xs text-muted-foreground whitespace-pre-wrap bg-white p-3 rounded border">
{`🎓 ¡CURSO COMPLETADO!

Hola, soy ${existingCertificate.userName} y acabo de completar exitosamente el curso:

📚 ${existingCertificate.courseName || course.title}

📅 Fecha: ${existingCertificate.completionDate}
🏆 ID: ${existingCertificate.certificateId}

He aprobado todos los módulos, sprints y exámenes.`}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsWhatsappDialogOpen(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        className="flex-1 bg-green-500 hover:bg-green-600"
                        onClick={handleSendWhatsApp}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Abrir WhatsApp
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Instructions */}
            <Card className="mt-8">
              <CardContent className="py-6">
                <h3 className="font-semibold mb-3">Instrucciones para enviar el certificado:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Haz clic en "Descargar PDF" para guardar tu certificado</li>
                  <li>Haz clic en "Enviar por WhatsApp"</li>
                  <li>Ingresa el número de WhatsApp de destino</li>
                  <li>Se abrirá WhatsApp con el mensaje predeterminado</li>
                  <li>Adjunta el PDF que descargaste al mensaje</li>
                  <li>¡Envía tu logro!</li>
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default CertificatePage;
