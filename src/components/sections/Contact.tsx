import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail, Facebook, Github } from 'lucide-react';
import { useLanguage } from '@/stores/LanguageContext';

export function Contact() {
	const { t } = useLanguage();

	return (
		<section id="contact" className="py-24 md:py-32">
			<Container>
				<SectionHeading title={t.contact.heading} />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center text-center"
				>
					<p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
						{t.contact.description}
					</p>
					<div className="flex flex-wrap justify-center gap-6 sm:gap-12">
						<motion.a
							href="mailto:ngosangns@gmail.com"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							whileHover={{ scale: 1.1, y: -3 }}
							className="glow-hover flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-xl"
						>
							<Mail className="h-7 w-7" />
							<span className="text-sm font-medium">{t.contact.emailLabel}</span>
						</motion.a>
						
						<motion.a
							href="https://facebook.com/gnas.dev"
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							whileHover={{ scale: 1.1, y: -3 }}
							className="glow-hover flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-xl"
						>
							<Facebook className="h-7 w-7" />
							<span className="text-sm font-medium">Facebook</span>
						</motion.a>

						<motion.a
							href="https://github.com/gnasdev"
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							whileHover={{ scale: 1.1, y: -3 }}
							className="glow-hover flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-xl"
						>
							<Github className="h-7 w-7" />
							<span className="text-sm font-medium">GitHub</span>
						</motion.a>
					</div>
				</motion.div>
				<div className="mt-20 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground/60 space-y-2">
					<div>
						<a
							href="https://sang.id.vn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground/80 hover:text-primary transition-colors"
						>
							{t.contact.blogLabel}
						</a>
					</div>
					<div>&copy; {new Date().getFullYear()} gnas.dev</div>
				</div>
			</Container>
		</section>
	);
}
